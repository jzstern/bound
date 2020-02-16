<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-body">
          <div id="left-column" style="width: 50%; float:left">
            <p style="font-weight:700">Total price</p>
          </div>

          <div id="right-column">
            <p style="font-weight:700">{{ tokenPriceUsd }}</p>
          </div>
        </div>
        <div
          @click="buyToken"
          class="btn"
          style="background-color:#398557; width:100%; margin:0; margin-bottom:10px;"
        >
          <p>Buy for {{ tokenPriceEth }} ETH</p>
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
import { web3Provider as web3 } from "../web3Provider.js";

export default {
  name: "Buy",
  computed: {
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
  data() {
    return {
      contractAddress: "0xDFA1dE81594DeC91c5a5765A0Cd27b8ECb79e5b9"
    };
  },
  methods: {
    getTransactionReceipt: async function(hash) {
      let receipt = null;

      while (receipt === null) {
        receipt = await this.getTransactionReceiptPromise(hash);
        setTimeout("", 1000);
      }

      return receipt;
    },
    getTransactionReceiptPromise(hash) {
      // ? promisify this
      return new Promise((resolve, reject) => {
        web3.eth.getTransactionReceipt(hash, function(err, data) {
          if (err !== null) reject(err);
          else resolve(data);
        });
      });
    },
    buyToken: async function() {
      web3.eth.sendTransaction(
        {
          // From address will automatically be replaced by the address of current user
          from: "0x0000000000000000000000000000000000000000",
          to: this.contractAddress,
          value: web3.utils.toWei(this.tokenPriceEth.toString(), "ether")
        },
        async (error, txnHash) => {
          if (error) {
            // TODO ; error handling
          } else {
            console.log("Transaction Hash: " + txnHash);
            this.$emit("confirmed");
            // const receipt = await this.getTransactionReceipt(txnHash);

            // if (receipt) {
            //   if (this.network === "mainnet") {
            //     console.log("tip success! do something");
            //   }
            // }
          }
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/global.scss";

.btn-cancel {
  border: 1px solid grey;
}

.col1 {
  float: left;
}

.col2 {
  float: right;
}

#currency-amount {
  // width: 100%;
  text-align: left;
  font-weight: 550;
  margin: 10px 0 20px 0;
  border-radius: 1px;
  font-size: 18px;
  padding: 15px 20px;
  background-color: #e3e5e8;
  border: 1px solid black;
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
