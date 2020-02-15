pragma solidity ^0.5.0;

import "./ContinuousToken.sol";


contract ETHContinuousToken is ContinuousToken {
    uint256 internal reserve;
  
    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint _initialSupply,
        uint32 _reserveRatio
    ) public payable ContinuousToken(_name, _symbol, _decimals, _initialSupply, _reserveRatio) {
        reserve = msg.value;
    }

    function () external payable { mint(); }

    function mint() public payable {
        uint purchaseAmount = msg.value;
        _continuousMint(purchaseAmount);
        reserve = reserve.add(purchaseAmount);
    }

    function burn(uint _amount) public {
        uint refundAmount = _continuousBurn(_amount);
        reserve = reserve.sub(refundAmount);
        msg.sender.transfer(refundAmount);
    }

    function reserveBalance() public view returns (uint) {
        return reserve;
    }    
}