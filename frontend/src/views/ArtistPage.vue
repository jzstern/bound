<template>
  <div class="artist-page">
    <ArtistTitle />
    <div id="card-titles">
      <h3 style="width:50%; margin:0;">Ticket</h3>
      <h3 style="width:50%; margin:0; transform:translateX(-25px);">Price</h3>
    </div>

    <div id="primary">
      <div id="artist-card">
        <img id="artist-img" :src="imgUrl" />
        <h2>{{ artistName }} VIP Ticket</h2>
        <ul id="offers">
          <li>
            Exclusive access to “BUBBA” behind-the-scenes videos and production
            tutorials
          </li>
          <li>Receive early access to unrealeased music and videos</li>
          <li>A chance to win an 1 on 1 production session</li>
          <li>
            Two free VIP concert tickets for every year that you hold the token
          </li>
          <li>Submit a monthly question to Kaytranada.</li>
          <!-- <li v-for="(offer, index) in offers">{{ offer.message }} - {{ index }}    </li> -->
        </ul>
      </div>

      <div id="curve-card">
        <div id="graph-section">
          <img class="graph" src="../assets/graph.svg" />
        </div>

        <div id="trade-section">
          <h5>current value</h5>
          <div id="price-and-token">
            <h1>$122.54</h1>
            <img id="token-number" src="../assets/tokenNumber.svg" />
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

    <Prizes :prizes-unlocked="prizesUnlocked" />
    <Buy class="modal" @close="buy = false" v-show="buy" />
    <Sell class="modal" @close="sell = false" v-show="sell" />
  </div>
</template>

<script>
import store from "../store/index.js";
import Fortmatic from "fortmatic";
import Web3 from "web3";
import Buy from "../components/Buy.vue";
import Sell from "../components/Sell.vue";
import Prizes from "../components/Prizes.vue";
import ArtistTitle from "../components/ArtistTitle.vue";
import { web3Provider as web3 } from "../web3Provider.js";

export default {
  name: "ArtistPage",
  computed: {},
  components: {
    Buy,
    Sell,
    Prizes,
    ArtistTitle
  },
  data() {
    return {
      artistName: "Kaytranada",
      price: ".01",
      buy: false,
      sell: false,
      contractAddress: "0xeb54D707252Ee9E26E6a4073680Bf71154Ce7Ab5",
      imgUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs3.amazonaws.com%2Ffactmag-images%2Fwp-content%2Fuploads%2F2016%2F05%2F02131614%2FKaytranada_photoCarysHuws2a-970x550.jpg&f=1&nofb=1",
      offers: [
        {
          message: "Dope prize #1"
        }
      ],
      prizesUnlocked: false
    };
  },
  methods: {
    buy() {
      web3.eth.sendTransaction({
        // From address will automatically be replaced by the address of current user
        from: "0x0000000000000000000000000000000000000000",
        to: this.contractAddress,
        value: web3.utils.toWei(this.price, "ether")
      });
    },
    sell() {
      alert("cashing out fam");
    }
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
