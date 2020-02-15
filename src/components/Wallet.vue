<template>
  <div id="wallet" @click="connectWallet">
    <div v-if="address == 'Connect Wallet'" class="dot red"></div>
    <div v-else class="dot green"></div>
    <p>{{ address }}</p>
  </div>
</template>

<script>
export default {
  name: "Wallet",
  data() {
    return {
      address: "Connect Wallet"
    };
  },
  methods: {
    connectWallet() {
      alert("connecting wallet");
      this.address = "0xc43r - 5gtd";
    }
  }
};
</script>

<style lang="scss">
@import "../styles/global.scss";

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50px;
  margin-right: 5px;
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
  margin-top: 10px;
  margin-right: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #1d1f20;
    opacity: 0.6;
  }
}
</style>