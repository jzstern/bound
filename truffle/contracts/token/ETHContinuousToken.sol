pragma solidity ^0.5.2;

import "./ContinuousToken.sol";

// Artist TOken
contract ETHContinuousToken is ContinuousToken {
    uint256 internal reserve;
    address payable internal artistAddress;
  
    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint _initialSupply,
        uint32 _reserveRatio,
        address payable _artistAddress
    ) public payable ContinuousToken(_name, _symbol, _decimals, _initialSupply, _reserveRatio) {
        reserve = msg.value;
        artistAddress = _artistAddress;
    }

    function () external payable { mint(); }

    // calculate artist amount and send rest to contract to mint
    // send 1.2x 
    function mint() public payable {
        uint artistAmount = msg.value * 200 / 10000; // 20% artist cut
        uint purchaseAmount = msg.value - artistAmount;
        artistAddress.transfer(purchaseAmount);
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