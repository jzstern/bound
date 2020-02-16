<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-body">
          <div id="left-column" style="width: 50%; float:left">
            <p>Token value</p>
            <p>Artist allocation</p>
            <p style="font-weight:700">You receive</p>
          </div>

          <div id="right-column">
            <p style>{{ tokenPriceUsd }}</p>
            <p style>{{ artistCutUsd }}</p>
            <p style="font-weight:700">{{ (tokenPriceUsd - artistCutUsd).toFixed(2) }}</p>
          </div>
        </div>
        <div
          @click="sellToken"
          class="btn"
          style="background-color:#da304c; width:100%; margin:0; margin-bottom:10px;"
        >
          <p>Sell for {{ tokenPriceEth }} ETH</p>
        </div>
        <div
          class="btn btn-cancel"
          style="background-color:transparent; width:100%; margin:0; margin-bottom:20px; "
          @click="$emit('close')"
          src="../assets/CloseModal.svg"
        >
          <p style="color:black">Cancel</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sell",
  computed: {
    artistCutUsd() {
      return (this.artistCutEth * this.ethPriceUsd).toFixed(2) || 0;
    },
    artistCutEth() {
      return this.tokenPriceEth * 0.2;
    },
    ethPriceUsd() {
      return this.$store.state.ethPrice;
    },
    tokenPriceEth() {
      return this.$store.state.tokenPriceEth;
    },
    tokenPriceUsd() {
      return (this.ethPriceUsd * this.tokenPriceEth).toFixed(2) || 0;
    }
  },
  methods: {
    sellToken() {
      web3.eth.sendTransaction({
        // From address will automatically be replaced by the address of current user
        from: "0x0000000000000000000000000000000000000000",
        to: this.contractAddress,
        value: web3.utils.toWei(this.tokenPriceEth, "ether")
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-cancel {
  border: 1px solid grey;
}

.col1 {
  float: left;
}

.col2 {
  float: right;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  width: 350px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  position: relative;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 300%;
  // transform: translateY(15px);
}

.close-modal {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  height: 25px;
  cursor: pointer;
}

#left-column {
  width: 50%;
  float: left;
  text-align: left;
}

#right-column {
  width: 50%;
  float: right;
  text-align: right;
}
</style>
