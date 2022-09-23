

modules.exports = async ({getnamedAccounts, deployments}) => {
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();
    await deploy('Owner', 'Validator', 'DataClient', 'EnokiFlowManager', {
        from: deployer,
        log: true,
        waitConfirmations: 5
    });
}