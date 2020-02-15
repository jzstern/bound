<template>
  <div class="artist-page">
    <div id="description">
      <img id="artist-img" :src="imgUrl" />
      <h2>{{ artistName }}</h2>
      <ul id="offers">
        <li>cool offer #1</li>
        <li>cool offer #2</li>
        <li>cool offer #3</li>
        <!-- <li v-for="(offer, index) in offers">{{ offer.message }} - {{ index }}    </li> -->
      </ul>
    </div>

    <div @click="buy" class="btn buy-btn">
      <p>Buy</p>
    </div>
    <div @click="sell" class="btn sell-btn">
      <p>Sell</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtistPage",
  data() {
    return {
      artistName: "Kaytranada",
      imgUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs3.amazonaws.com%2Ffactmag-images%2Fwp-content%2Fuploads%2F2016%2F05%2F02131614%2FKaytranada_photoCarysHuws2a-970x550.jpg&f=1&nofb=1",
      offers: [
        {
          message: "Dope prize #1"
        }
      ]
    };
  },
  methods: {
    buy() {
      alert("buying that good good");
    },
    sell() {
      alert("cashing out fam");
    }
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