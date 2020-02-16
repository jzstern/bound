import { web3Provider as web3 } from "../web3Provider.js";
import { fm as provider } from "../web3Provider.js";

const tokenContractABI = require("../contract/ETHContinuousToken.json")

/** getTokenContractObject: address -> integer
 ** Return token object for contract given address **/
let getEmptyTokenContractObject = async function() {
	let contract =  await new web3.eth.Contract(tokenContractABI.abi);
	return contract;
};

let deployArtistContract = async function(artistAddress, tokenName, tokenSymbol) {
	let contract = await getEmptyTokenContractObject();
	//deployer.deploy(ETHContinuousToken, "ArtistToken1", "ART0", 18, 1, 330000); 
	await contract.deploy({
		data: tokenContractABI.bytecode,
		arguments: [tokenName, tokenSymbol, 18, 1, 330000]
	})
	.send({
		from: artistAddress,
		gas: 5699610,
		gasPrice: web3.utils.toWei('1', 'wei')
	}, function(error, transactionHash) {
		console.log(error);
	})
	.then((newContractInstance) => {
		contract.options.address=newContractInstance.options.address
	});
	return contract;
};

export default {
	deployArtistContract: deployArtistContract
};