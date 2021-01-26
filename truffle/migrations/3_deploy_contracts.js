// Fetch the Storage contract data from the Storage.json file
//var ERC20ContinuousToken = artifacts.require("./token/ERC20ContinuousToken.sol");
var ArtistToken2 = artifacts.require("./token/ArtistToken2.sol");

// JavaScript export
module.exports = function(deployer) {
    // deploy the ERC20 Token Contract
    deployer.deploy(ArtistToken2, "ArtistToken2", "ART1", 18, 1, 330000); // 10000 = 1%
}