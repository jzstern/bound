<template>
	<div id="tests">
		<div id="rando-button" @click="deployOneContract">Button</div>
	</div>
</template>

<script>
	import Tests from "../tests/Tests.vue";	
	import contractApi from "../api/contract.js";
	import deployApi from "../api/deploy.js"

	export default {
		name: "Tests",
		methods: {
			/** Get current supply of a token contract given address**/
			async test() {
				// deployed contract address
				let contractAddress = '0xa581762114703B7C84BF56EDB9c3133025418872';
				let testAddress = '0xD8CD93BcBa6232c1D3E0441d34c2425b8A549797';
				// mock userAddress
				let contractData = await this.getData(contractAddress, testAddress);
				//await this.deployArtistContracts();
			},
			async getData(contractAddress, userAddress) {
				let contractData = {
					artistTokenSupply: await contractApi.getContinuousSupply(contractAddress),
					contractEthBalance: await contractApi.getReserveBalance(contractAddress),
					getUserTokenBalance: await contractApi.getUserTokenBalance(contractAddress, userAddress),
					getContinuousMintReward: await contractApi.getContinuousMintReward(contractAddress),
					getTokenContractObject: await contractApi.getTokenContractObject(contractAddress)
				}
				console.log(contractData);
				return contractData;
			},
			async deployOneContract() {
				let address = '0xDFA1dE81594DeC91c5a5765A0Cd27b8ECb79e5b9';
				let contract = await deployApi.deployArtistContract(address, "Artist1", "ART1");
				console.log(contract)
			},
			async deployArtistContracts() {
				debugger;
				let userAddress1 = '0x162A5568f4B40ea5e27D414FF79E140336eB954a';
				let userAddress2 = '0xA30E269ACA08C3Ad2566b98Efb9f24cE2670B72d';
				let userAddress3 = '0x3B6B4E1c6Dac8141B5616bFEd0fcDeb7F5978626';
				let contract1 = await deployApi.deployArtistContract(userAddress1, "Artist1", "ART1");
				let contract2 = await deployApi.deployArtistContract(userAddress2, "Artist2", "ART2");
				let contract3 = await deployApi.deployArtistContract(userAddress3, "Artist3", "ART3");
				console.log(contract1);
			}
		},
		mounted() {
			this.test();
	}
}
</script>

<style lang="scss" scoped>
@import "../styles/global.scss";

	#rando-button {
		@extend %hover;
		background: gray;
		border-radius: 5px;
		width: 80px;
		margin: auto;
		color: white;
	}
</style>