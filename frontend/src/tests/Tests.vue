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
				let contractAddress = '0xa8761beCDEacD70e56be419b30542f393007B9db';
				// mock userAddress
				let userAddress = '0xD8CD93BcBa6232c1D3E0441d34c2425b8A549797';
				let contractData = await this.getData(contractAddress, userAddress);
			},
			async getData(contractAddress, userAddress) {
				let contractData = {
					artistTokenSupply: await contractApi.getContinuousSupply(contractAddress),
					contractEthBalance: await contractApi.getReserveBalance(contractAddress),
					//contractMaxSupply: await contractApi.getTotalSupply(contractAddress, userAddress),
					getUserTokenBalance: await contractApi.getUserTokenBalance(contractAddress, userAddress),
					getContinuousMintReward: await contractApi.getContinuousMintReward(contractAddress),
					getTokenContractObject: await contractApi.getTokenContractObject(contractAddress)
				}
				console.log(contractData);
				return contractData;
			}
		},
		mounted() {
			this.test();
	}
}
</script>