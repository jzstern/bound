<template>
	<div id="tests">
		<h5>{{ someData }}</h5>
	</div>
</template>

<script>
	import Tests from "../tests/Tests.vue";	
	import contractApi from "../api/contract.js";

	export default {
		name: "Tests",
		data() {
			return {
				someData: "ayyy 69 lmao"
			}
		},
		methods: {
			/** Get current supply of a token contract given address**/
			async test() {
				// deployed contract address
				let contractAddress = '0x2409dFeBEe64a156636be50FFc3ecF25cd65758B';
				// mock userAddress
				let userAddress1 = '0x162A5568f4B40ea5e27D414FF79E140336eB954a';
				let userAddress2 = '0xA30E269ACA08C3Ad2566b98Efb9f24cE2670B72d';
				let userAddress3 = '0x3B6B4E1c6Dac8141B5616bFEd0fcDeb7F5978626';
				let contractData = await this.getData(contractAddress, userAddress1);
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
			async deployArtistContracts() {

			}
		},
		mounted() {
			this.test();
	}
}
</script>