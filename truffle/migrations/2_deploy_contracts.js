// Fetch the Storage contract data from the Storage.json file
//var ERC20ContinuousToken = artifacts.require("./token/ERC20ContinuousToken.sol");
var ArtistToken1 = artifacts.require("./token/ArtistToken1.sol");

// JavaScript export
module.exports = function(deployer) {
    // deploy the ERC20 Token Contract
    deployer.deploy(ArtistToken1, "ArtistToken1", "ART1", 18, 1, 330000); // 10000 = 1%
}