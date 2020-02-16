<template>
  <div class="artist-page">
    <div id="description">
      <img id="artist-img" :src="imageSrc" />
      <h2>{{ artistName }}</h2>
      <h5>Price: {{ price }} ETH</h5>
      <ul id="offers">
        <li>cool offer #1</li>
        <li>cool offer #2</li>
        <li>cool offer #3</li>
      </ul>
    </div>

    <div @click="buy" class="btn buy-btn">
      <p>Buy</p>
    </div>
    <div @click="createBox" class="btn sell-btn">
      <p>Sell</p>
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";
import { web3Provider as web3 } from "../web3Provider.js";
import { fm as provider } from "../web3Provider.js";
// import Box from "../web3Provider.js";
const Box = require("3box");

export default {
  name: "ArtistPage",
  computed: {
    provider() {
      return this.$store.state.user.provider;
    },
    userWalletAddress() {
      return this.$store.state.user.walletAddress;
    }
  },
  data() {
    return {
      artistName: null,
      price: ".01",
      artistAddress: null,
      imageSrc: "",
      rewards: [],
      boxAddress: "0x2ca6aFF1D484E86f24e0a9c9D879b116c3c904C5"
    };
  },
  methods: {
    buy() {
      web3.eth.sendTransaction({
        // From address will automatically be replaced by the address of current user
        from: "0x0000000000000000000000000000000000000000",
        to: this.artistAddress,
        value: web3.utils.toWei(this.price, "ether")
      });
    },
    sell() {
      alert("cashing out fam");
    },
    createBox: async function() {
      const box = await Box.openBox(this.artistAddress, this.provider);
      console.log(box);
      const space = await box.openSpace("kaytranada");
      space.public.set("title", "Kaytranada");
      space.public.set("id", "9876543210");
      console.log(space);
      this.spaceList = await Box.listSpaces(this.artistAddress);
      console.log(this.spaceList);
    }
  },
  mounted: async function() {
    const profile = await Box.getProfile(this.boxAddress);
    var artist = JSON.parse(profile.artists1);
    this.artistName = artist.name;
    this.artistAddress = artist.artistAddress;
    this.imageSrc = artist.imageSrc;
    this.rewards = artist.rewards;
  }
};
</script>

<style lang="scss">
@import "../styles/global.scss";

#artist-img {
  width: 400px;
}

.artist-page {
  h2 {
    color: white;
  }
}

#description {
  width: 700px;
  height: 500px;
  border: 1px solid black;
  background: black;
  margin: auto;
  color: white;
}

.btn {
  @extend %hover;
  width: 216px;
  height: 55px;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: auto;

  p {
    @extend %center;
    color: white;
  }
}

.buy-btn {
  background: #398557;
}

.sell-btn {
  background: #da304c;
}

#offers {
  text-align: left;
}
</style>