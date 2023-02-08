// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const SBT = artifacts.require("SBT");

module.exports = function(deployer) {
    deployer.deploy(SBT, "TriSBT", "TSBT", "http://localhost/");
};