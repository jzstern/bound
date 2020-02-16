import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      provider: null,
      walletAddress: "0xE0EC61841FCAf59c6650E5F9675345a10F9e31B9"
      // walletAddress: "Connect Wallet"
    }
  },
  mutations: {
    setProvider(state, provider) {
      state.user.provider = provider;
    },
    setUserWalletAddress(state, walletAddress) {
      state.user.walletAddress = walletAddress;
    }
  }
})
