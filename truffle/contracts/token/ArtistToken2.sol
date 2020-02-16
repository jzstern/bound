pragma solidity ^0.5.2;

import "./ETHContinuousToken.sol";

contract ArtistToken2 is ETHContinuousToken {
	constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint _initialSupply,
        uint32 _reserveRatio
    ) public ETHContinuousToken(_name, _symbol, _decimals, _initialSupply, _reserveRatio) {}
}