<template>
  <div class="artist-page">
    <ArtistTitle :prizes-unlocked="prizesUnlocked" />
    <!-- <div id="card-titles">
      <h3 style="width:50%; margin:0;">Ticket</h3>
      <h3 style="width:50%; margin:0; transform:translateX(-25px);">Price</h3>
    </div>-->

    <div id="primary">
      <div>
        <h3 style="margin-left: 25px">Ticket</h3>
        <div id="artist-card">
          <img id="artist-img" :src="imageSrc" />
          <h2>{{ artistName }} VIP Ticket</h2>
          <ul id="offers">
            <!-- <li :v-for="reward in rewards">{{reward.title}}</li> -->
            <li>
              Exclusive access to “BUBBA” behind-the-scenes videos and
              production tutorials
            </li>
            <li>Receive early access to unrealeased music and videos</li>
            <li>A chance to win an 1 on 1 production session</li>
            <li>
              Two free VIP concert tickets for every year that you hold the
              token
            </li>
            <li>Submit a monthly question to Kaytranada.</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 style="margin-left: 25px">Price</h3>
        <div id="curve-card">
          <div id="graph-section">
            <ChartsMock />
            <!-- <ChartsMock :total-token-supply="totalTokenSupply" /> -->
            <!-- <img class="graph" src="../assets/graph.svg" /> -->
          </div>

          <div id="trade-section">
            <h5>current value</h5>
            <div id="price-and-token">
              <h1>${{ tokenPriceUsd }}</h1>
              <!-- <img id="token-number" src="../assets/tokenNumber.svg" /> -->
            </div>
            <div id="trade-buttons">
              <div
                @click="buy = true"
                class="btn"
                style="background-color:#398557;"
              >
                <p>Buy</p>
              </div>
              <div
                @click="sell = true"
                class="btn sell-btn"
                style="background-color:#da304c;"
              >
                <p>Sell</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="slide-fade">
      <Tests ref="Tests" @receivedContractData="updateContract" />
    </transition>

    <transition name="slide-fade">
      <Prizes :prizes-unlocked="prizesUnlocked" />
    </transition>
    <transition name="slide-fade">
      <Buy
        class="modal"
        @close="buy = false"
        @confirmed="prizesUnlocked = true"
        v-show="buy"
      />
    </transition>
    <transition name="slide-fade">
      <Sell class="modal" @close="sell = false" v-show="sell" />
    </transition>
  </div>
</template>

<script>
import store from "../store/index.js";
import Fortmatic from "fortmatic";
import Web3 from "web3";
import ChartsMock from "../components/ChartsMock.vue";
// import { web3Provider as web3 } from "../web3Provider.js";
// import { fm as provider } from "../web3Provider.js";
// import Box from "../web3Provider.js";
const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();
const Box = require("3box");

import Buy from "../components/Buy.vue";
import Sell from "../components/Sell.vue";
import Prizes from "../components/Prizes.vue";
import ArtistTitle from "../components/ArtistTitle.vue";
import Tests from "../tests/Tests.vue";

export default {
  name: "ArtistPage",
  components: {
    Buy,
    ChartsMock,
    Sell,
    Prizes,
    ArtistTitle,
    Tests
  },
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
      artistAddress: null,
      artistName: null,
      boxAddress: "0x2ca6aFF1D484E86f24e0a9c9D879b116c3c904C5",
      buy: false,
      sell: false,
      imageSrc: "",
      rewards: [],
      prizesUnlocked: false,
      totalTokenSupply: 0
    };
  },
  methods: {
    getETHPrice: async function() {
      let ethQuery = await CoinGeckoClient.simple.price({
        ids: ["ethereum"],
        vs_currencies: ["usd"]
      });

      return ethQuery.data.ethereum.usd;
    },
    updateContract(contractData) {
      console.log(contractData);
      this.totalTokenSupply = contractData.artistTokenSupply;
    }
  },
  mounted: async function() {
    const profile = await Box.getProfile(this.boxAddress);
    var artist = JSON.parse(profile.artists1);
    this.artistName = artist.name;
    this.artistAddress = artist.artistAddress;
    this.imageSrc = artist.imageSrc;
    this.rewards = artist.rewards;

    let ethPrice = await this.getETHPrice();
    store.commit("setEthPrice", ethPrice);

    this.$refs.Tests.test();
    store.commit("setTokenPriceEth", 0.37592);
  }
};
</script>

<style lang="scss">
@import "../styles/global.scss";

* {
  margin: 0;
}

h1 {
  color: #1d1f20b7;
  font-size: 44px;
  font-family: "UltraSystem";
  margin: 10px 0 0 10px;
}

h2 {
  font-family: "Syne";
  width: 100%;
  text-align: left;
  margin: 25px 0 15px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid white;
}

h5 {
  color: #1d1f20;
  opacity: 0.45;
  font-size: 16px;
  margin: 20px 0 10px 10px;
  font-variant: small-caps;
}

ul {
  margin-top: 15px;
  line-height: 120%;
}

li {
  margin-bottom: 20px;
  opacity: 0.9;
}

#artist-page {
  max-width: 80%;
  margin: auto;
}

#artist-img {
  width: 100%;
  height: 200px;
  border-radius: 5px;
  object-fit: cover;
}

#artist-card {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 460px;
  height: 560px;
  border: 1px solid black;
  border-radius: 10px;

  background: #1d1f20;
  margin: 20px;
  color: white;
  text-align: left;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
}

#curve-card {
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 591px;
  height: 600px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background: transparent;
  margin: 20px;
  color: white;
  text-align: left;
  clip-path: inset(0px 0px 0px 0px);
}

#graph-section {
  flex: 1;
  // height: 90%;
  // border-bottom: 1px solid black;
}

.graph {
  // position: absolute;
  left: 0;
}

.graph-lines {
  order: 1;
}

.numbers {
  height: 40px;
  order: 3;
}

.graph-curve {
  // left: 0;
}

.btn {
  @extend %hover;
  width: 250px;
  height: 60px;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  text-align: center;
  margin: 20px 10px 0 10px;

  p {
    @extend %center;
    color: white;
  }
}

#offers {
  padding-left: 20px;
}

#primary {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  margin: auto;
  margin-top: -80px;
}

#card-titles {
  max-width: 1130px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  margin: auto;
}

#trade-section {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 210px;
  padding: 0 20px 20px 20px;
}

#trade-buttons {
  display: flex;
  justify-content: center;
  flex-direction: row;
  bottom: 25px;
}

#price-and-token {
  display: flex;
  flex-direction: row;
}

#token-number {
  display: inline-block;
  transform: translate(25%);
}
</style>
