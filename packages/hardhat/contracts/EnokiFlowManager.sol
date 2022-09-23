// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.14;

import {ISuperfluid, ISuperToken, ISuperApp, ISuperAgreement, SuperAppDefinitions} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {CFAv1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/CFAv1Library.sol";
import {IConstantFlowAgreementV1} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol";
import {SuperAppBase} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperAppBase.sol";

/// @dev Registration key for the Constant Flow Agreement that is used to get the address from the host.
bytes32 constant CFA_ID = keccak256("org.superfluid.finance.agreements.ConstantFlowAgreement.v1");

/// @dev Throw when the receiver is the zero address.
error InvalidReceiver();

/// @dev Throw when the receiver is also a super app.
error ReceiverIsSuperApp();

/// @dev Throw when the callback caller is not the host.
error Unauthorized();

/// @dev Throw when the token being streamed to theis contract is invalid.
error InvalidToken();

/// @dev Throw when the agreement is other thne the Constant Flow Agreement V1.
error InvalidAgreement();


/// @title Enoki Flow Manager Contract
/// @notice This contract is a regis
contract EnokiFlowManager is SuperAppBase {
    using CFAv1Library for CFAv1Library.InitData;

    // Initialize cfaV1 variable.
    CFAv1Library.InitData public cfaV1Lib;
    
    ISuperfluid private _host;
    IConstantFlowAgreementV1 private _constantFlowAgreement; // This is the stored constant flow agreement class address.
    ISuperToken private _acceptedToken;
    address private _receiver;

    constructor(
        ISuperfluid host,
        ISuperToken acceptedToken,
        address receiver
    ) {

        assert(address(host) != address(0));
        assert(address(acceptedToken) != address(0));
        assert(address(receiver) != address(0));
        
        _acceptedToken = acceptedToken;
        _receiver = receiver;

        cfaV1Lib = CFAv1Library.InitData({
            host:  host,
            cfa: IConstantFlowAgreementV1(address(host.getAgreementClass(CFA_ID)))
        });

        // ERC1820 registration as Super App.
        uint256 configWord =  
            SuperAppDefinitions.APP_LEVEL_FINAL |
            SuperAppDefinitions.BEFORE_AGREEMENT_CREATED_NOOP |
            SuperAppDefinitions.BEFORE_AGREEMENT_UPDATED_NOOP |
            SuperAppDefinitions.BEFORE_AGREEMENT_TERMINATED_NOOP;

        // For deployments to development environments or testnets, this can be an empty string.
        string memory registrationKey = "";

        _host.registerAppWithKey(configWord, registrationKey);
    }


    // Events

    event ReceiverChanged(address indexed receiver);


    // Modifiers

    modifier onlyHost() {
        if (msg.sender != address(cfaV1Lib.host)) revert Unauthorized();
        _;
    }

    modifier onlyExpected(ISuperToken superToken, address agreementClass) {
        if (superToken != _acceptedToken) revert InvalidToken();
        if (agreementClass != address(cfaV1Lib.cfa)) revert InvalidAgreement();
        _;
    }

    // Receiver Data
    /// @notice Returns the current receiver's address, start time, and flow rate.
    /// @return startTime Start time of the current flow.
    /// @return receiver Receiving address.
    /// @return flowRate Flow rate from this contract to the receiver.
    function currentReceiver() 
        external
        view
        returns (
            uint256 startTime,
            address receiver,
            int96 flowRate
        )
    {
        if (receiver != address(0)) {
            (startTime, flowRate, , ) = cfaV1Lib.cfa.getFlow(
                _acceptedToken,
                address(this),
                _receiver
            );

            receiver = _receiver;  
        }
    }


    // Super App Callbacks

    function afterAgreementCreated(
        ISuperToken _superToken,
        address _agreementClass,
        bytes32, // _agreementId,
        bytes calldata, // _agreementData,
        bytes calldata, // _cbdata,
        bytes calldata _ctx
    )   
        external
        override
        onlyExpected(_superToken, _agreementClass)
        onlyHost
        returns (bytes memory newCtx) 
    {
        return _updateOutflow(_ctx);
    }

    function afterAgreementUpdated(
        ISuperToken _superToken,
        address _agreementClass,
        bytes32, // _agreementId,
        bytes calldata, // _agreementData
        bytes calldata, // _cbdata
        bytes calldata _ctx
    )
        external
        override
        onlyExpected(_superToken, _agreementClass)
        onlyHost
        returns (bytes memory newCtx)
    {
        return _updateOutflow(_ctx);
    }

    function afterAgreementTerminated(
        ISuperToken _superToken,
        address _agreementClass,
        bytes32, // _agreementId
        bytes calldata, // _agreementData
        bytes calldata, // _cbdata
        bytes calldata _ctx
    ) external override onlyHost returns (bytes memory newCtx) {
        // We should never revert in a termination callback.
        if (_superToken != _acceptedToken || _agreementClass != address(cfaV1Lib.cfa)) {
            return _ctx;
        }

        return _updateOutflow(_ctx);
    }

    // Internal Logic

    /// @dev Changes the receiever and redirects all flows to the new one. Logs `ReceiverChanged`.
    // @param newReceiver The new receiver to which to redirect.
    function _changeReceiver(address newReceiver) internal {
        if (newReceiver == address(0)) revert InvalidReceiver();

        if (cfaV1Lib.host.isApp(ISuperApp(newReceiver))) revert ReceiverIsSuperApp();
        
        if (newReceiver == _receiver) return;

        (, int96 outFlowRate, , ) = cfaV1Lib.cfa.getFlow(_acceptedToken, address(this), _receiver);

        if (outFlowRate > 0) {
            cfaV1Lib.deleteFlow(address(this), _receiver, _acceptedToken);

            cfaV1Lib.createFlow(
                newReceiver,
                _acceptedToken,
                cfaV1Lib.cfa.getNetFlow(_acceptedToken, address(this))
            );
        }

        _receiver = newReceiver;

        emit ReceiverChanged(newReceiver);
    }

    /// @dev Updates the outflow that is then either created, updated, or deleted, depending
    /// depending on the net flow rate.
    /// @param ctx The context byte array from the Host's calldata.
    /// @return newCtx The new context byte array to be returned to the Host.
    function _updateOutflow(bytes calldata ctx) private returns (bytes memory newCtx) {
        newCtx = ctx;

        int96 netFlowRate = cfaV1Lib.cfa.getNetFlow(_acceptedToken, address(this));

        (, int96 outFlowRate, , ) = cfaV1Lib.cfa.getFlow(_acceptedToken, address(this), _receiver);

        int96 inFlowRate = netFlowRate + outFlowRate;

        if (inFlowRate == 0) {
            // The flow exists and should be deleted.
            newCtx = cfaV1Lib.deleteFlowWithCtx(ctx, address(this), _receiver, _acceptedToken);
        } else if (outFlowRate != 0) {
            // The flow exists and should be updated.
            newCtx = cfaV1Lib.updateFlowWithCtx(ctx, _receiver, _acceptedToken, inFlowRate);
        } else {
            // The flow doesn't exist and should be created.
            newCtx = cfaV1Lib.createFlowWithCtx(ctx, _receiver, _acceptedToken, inFlowRate);
        }
    }
}