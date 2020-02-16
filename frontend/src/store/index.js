import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      provider: null,
      walletAddress: "Connect Wallet"
    }
  },
  mutations: {
    setUserWalletAddress(state, walletAddress) {
      state.user.walletAddress = walletAddress;
    }
  }
})
