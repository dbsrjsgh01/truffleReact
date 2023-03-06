var Contacts = artifacts.require("./Contacts.sol");

module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Contacts);
};
