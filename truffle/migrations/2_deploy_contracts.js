// Fetch the Storage contract data from the Storage.json file
//var ERC20ContinuousToken = artifacts.require("./token/ERC20ContinuousToken.sol");
var ETHContinuousToken = artifacts.require("./token/ETHContinuousToken.sol");

// JavaScript export
module.exports = function(deployer) {
    // deploy the ERC20 Token Contract

    // ETHContinuousToken
    // Deploy the continuous token contract
    //deployer.deploy(ERC20ContinuousToken, "ArtistToken", "ART", 1, 500, 0.3);
    deployer.deploy(ETHContinuousToken, "ArtistToken", "ART", 18, 500, 300000);
}

/**
string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint _initialSupply,
        uint32 _reserveRatio
**/