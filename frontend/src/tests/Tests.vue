<template>
  <div id="tests"></div>
</template>

<script>
import contractApi from "../api/contract.js";

export default {
  name: "Tests",
  methods: {
    /** Get current supply of a token contract given address**/
    async test() {
      // deployed contract address
      let contractAddress = "0x5Eb3c104431b41f565DbC5193c58C4C75123dbeE";
      // mock userAddress
      let userAddress = "0xD8CD93BcBa6232c1D3E0441d34c2425b8A549797";
      // let contractData = await this.getData(contractAddress, userAddress);
      // this.$emit("receivedContractData", contractData);
    },
    async getData(contractAddress, userAddress) {
      let contractData = {
        artistTokenSupply: await contractApi.getContinuousSupply(
          contractAddress
        ),
        contractEthBalance: await contractApi.getReserveBalance(
          contractAddress
        ),
        //contractMaxSupply: await contractApi.getTotalSupply(contractAddress, userAddress),
        getUserTokenBalance: await contractApi.getUserTokenBalance(
          contractAddress,
          userAddress
        ),
        getContinuousMintReward: await contractApi.getContinuousMintReward(
          contractAddress
        ),
        getTokenContractObject: await contractApi.getTokenContractObject(
          contractAddress
        )
      };
      return contractData;
    }
  },
  mounted() {
    this.test();
  }
};
</script>