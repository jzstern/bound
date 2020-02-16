<template>
  <div id="wallet" @click="connectWallet">
    <div v-if="address == 'Connect Wallet'" class="dot red"></div>
    <div v-else class="dot green"></div>
    <p>{{ trimmedAddress }}</p>
  </div>
</template>

<script>
import { web3Provider as web3 } from "../web3Provider.js";
import { fm as provider } from "../web3Provider.js";
import store from "../store/index.js";

export default {
  name: "Wallet",
  computed: {
    address() {
      return this.$store.state.user.walletAddress;
    },
    trimmedAddress() {
      if (this.address == "Connect Wallet") return "Connect Wallet";
      else {
        let addr = this.$store.state.user.walletAddress;
        return addr.substring(0, 4) + " - " + addr.substring(addr.length - 4);
      }
    }
  },
  methods: {
    connectWallet: async function() {
      // TODO - allow MetaMask connection?
      if (this.address == "Connect Wallet") {
        await web3.currentProvider.enable();

        web3.eth.getAccounts((error, accounts) => {
          if (error) throw error;
        });
        web3.eth.getCoinbase((error, coinbase) => {
          if (error) throw error;
          console.log(coinbase);
          store.commit("setUserWalletAddress", coinbase);
        });

        store.commit("setProvider", provider.getProvider());
      }
    }
  },
  // TODO - get rid of this for PROD
  mounted() {
    store.commit("setProvider", provider.getProvider());
  }
};
</script>

<style lang="scss">
@import "../styles/global.scss";

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50px;
  margin-right: 3px;
}

.green {
  background: linear-gradient(180deg, #398557 0%, #33c16b 100%);
}

.red {
  background: linear-gradient(180deg, #d34f6b 0%, #d16969 100%);
}

#wallet {
  @extend %hover;
  width: 143px;
  height: 34px;
  background: #e3e5e8;
  border-radius: 4px;
  // margin-top: 1px;
  margin-right: 30px;
  padding: 4px 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #1d1f20;
    opacity: 0.6;
    margin-left: 5px;
  }
}
</style>
