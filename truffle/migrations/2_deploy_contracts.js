// Fetch the Storage contract data from the Storage.json file
//var ERC20ContinuousToken = artifacts.require("./token/ERC20ContinuousToken.sol");
var ETHContinuousToken = artifacts.require("./token/ETHContinuousToken.sol");

// JavaScript export
module.exports = function(deployer) {
    // deploy the ERC20 Token Contract

    // ETHContinuousToken
    // Deploy the continuous token contract
    //deployer.deploy(ERC20ContinuousToken, "ArtistToken", "ART", 1, 500, 0.3);
    deployer.deploy(ETHContinuousToken, "ArtistToken1", "ART1", 18, 1, 330000, 0xa8ab731f7e47135b72412AacA759bB5FDce8397F); // 10000 = 1%
    //deployer.deploy(ETHContinuousToken, "ArtistToken2", "ART2", 18, 0, 330000); // 10000 = 1%
    //deployer.deploy(ETHContinuousToken, "ArtistToken3", "ART3", 18, 0, 330000); // 10000 = 1%
}

/**
string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint _initialSupply,
        uint32 _reserveRatio
**/