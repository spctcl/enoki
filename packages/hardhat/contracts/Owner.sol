// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.14;

import {EnokiFlowManager, ISuperToken, ISuperfluid} from "./EnokiFlowManager.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/// @title Enoki Owner NFT
/// @notice Inherites the ERC721 NFT interface from Open Zeppelin and the EnokiFlowManager logic to
/// direct incoming streams to the account that owns this NFT.
contract Owner is ERC721, EnokiFlowManager {

    constructor(
        address owner,
        string memory _name,
        string memory _symbol,
        ISuperfluid host,
        ISuperToken acceptedToken
    ) ERC721(_name, _symbol) EnokiFlowManager(host, acceptedToken, owner) {
        _mint(owner, 1);
    }

    /// @dev Before transferring the NFT, set the token receiver to be the stream receiver as defined
    /// in `EnokiFlowManager`.
    /// @param to the new receiver.
    function _beforeTokenTransfer(
        address, // From address.
        address to,
        uint256 // tokenId
    ) internal override {
        _changeReceiver(to);
    }
}