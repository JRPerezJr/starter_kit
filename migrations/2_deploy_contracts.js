// eslint-disable-next-line no-undef
const EthSwap = artifacts.require('Migrations');

module.exports = function(deployer) {
  deployer.deploy(EthSwap);
};
