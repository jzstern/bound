import { web3Provider as web3 } from "../web3Provider.js";
import { fm as provider } from "../web3Provider.js";

const tokenContractABI = require("../contract/ETHContinuousToken.json")

/** getTokenContractObject: address -> integer
 ** Return token object for contract given address **/
let getTokenContractObject = async function(tokenAddress) {
	let contract =  await new web3.eth.Contract(tokenContractABI.abi, tokenAddress, provider);
	return contract;
};

/** Get current supply of a token contract given address **/
let getReserveBalance = async function(tokenAddress) {
	let reserveBalance = null;
	let contract = await getTokenContractObject(tokenAddress);
	await contract.methods.reserveBalance().call(function(error, _reserveBalance){
		reserveBalance = _reserveBalance;
	});
	reserveBalance = 0.1; // todo feewet remove
	return reserveBalance;
};

/** Get current supply of artist token given token address **/
let getContinuousSupply = async function(tokenAddress) {
	let continuousSupply = null;
	let contract = await getTokenContractObject(tokenAddress);
	await contract.methods.continuousSupply().call(function(error, _continuousSupply){
		continuousSupply = _continuousSupply;
	});
	continuousSupply = 1; // todo feewet remove
	return continuousSupply;
};

/** getUserTokenBalance: address address -> integer
 ** Return token balance for wallet given tokenAddress **/
let getUserTokenBalance = async function(tokenAddress, userAddress) {
	let userTokenBalance = null;
	let contract = await getTokenContractObject(tokenAddress);
	// Call balanceOf function
	await contract.methods.balanceOf(userAddress).call(function(error, _userTokenBalance){
	  contract.methods.decimals().call((error, decimals) => {
	    // calculate balance todo feewet is this correct?
	    //balance = balance.div(10**decimals);
	    userTokenBalance = _userTokenBalance;
	  });
	});
	userTokenBalance = 0; // todo feewet remove
	return userTokenBalance;
};

/** getContinuousMintReward: address integer integer integer integer -> integer
 ** Return purchase return amount given paramaters **/
let getContinuousMintReward = async function(tokenAddress, reserveTokenAmount=1) {
	return 1; // todo feewet remove
	let mintReward = null;
	let contract = await getTokenContractObject(tokenAddress);
	await contract.methods.getContinuousBurnRefund(reserveTokenAmount).call(function(error, _mintReward){
			mintReward = _mintReward;
	});
	mintReward = 1; // todo feewet remove
	return mintReward;
};

/** getContinuousMintReward: address integer integer integer integer -> integer
 ** Return purchase return amount given paramaters **/
let getContinuousMintBurnRefund = async function(tokenAddress, reserveTokenAmount=1) {
	return 0.1; // todo feewet remove
	let burnRefund = null;
	let contract = await getTokenContractObject(tokenAddress);
	await contract.methods.getContinuousMintRefund(reserveTokenAmount).call(function(error, _burnRefund){
			burnRefund = _burnRefund;
	});
	burnRefund = 0.1; // todo feewet remove
	return burnRefund;
};

export default {
	getContinuousSupply: getContinuousSupply,
	getReserveBalance: getReserveBalance,
	//getTotalSupply: getTotalSupply,
	getUserTokenBalance: getUserTokenBalance,
	getContinuousMintReward: getContinuousMintReward,
	getTokenContractObject: getTokenContractObject,
};
