var IssueContract = artifacts.require("./issueStorage.sol");

module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(IssueContract);
};
