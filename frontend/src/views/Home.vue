<template>
  <div class="home">
    <div id="card-grid">
      <router-link to="/artist">
        <div class="card">
          <img
            id="artist-img"
            src="https://factmag-images.s3.amazonaws.com/wp-content/uploads/2016/05/Kaytranada_photoCarysHuws2a-1200x630.jpg"
          />
          <!-- <h2>{{ artistName }}</h2>
          <h5>Price: {{ amount }} ETH</h5>-->
          <p class="artist-name">Kaytranada</p>
          <!-- <p class="artist-token-price">$153.34</p> -->
        </div>
      </router-link>
      <div class="card">
        <img id="artist-img" src="https://ichef.bbci.co.uk/images/ic/960x540/p041b0zn.jpg" />
        <p class="artist-name">Khraungbin</p>
      </div>
      <div class="card">
        <img
          id="artist-img"
          src="http://indietronica.org/wp-content/uploads/2016/11/Joe-Hertz-1024x575.jpg"
        />
        <p class="artist-name">Joe Hertz</p>
      </div>
      <div class="card">
        <img
          id="artist-img"
          src="http://assets.nydailynews.com/polopoly_fs/1.1109050.1341595620!/img/httpImage/image.jpg_gen/derivatives/article_1200/ocean7f-1-web.jpg"
        />
        <p class="artist-name">Frank Ocean</p>
      </div>
      <div class="card">
        <img
          id="artist-img"
          src="https://media.newyorker.com/photos/590973c88b51cf59fc422ca3/16:9/w_1200,h_630,c_limit/160208_r27647.jpg"
        />
        <p class="artist-name">Madlib</p>
      </div>
      <div class="card">
        <img
          id="artist-img"
          src="https://spiritualityhealth.com/assets/images/Articles/_articleSummaryImage/PhilipGlass_CreditStevePyke.jpg"
        />
        <p class="artist-name">Philip Glass</p>
      </div>
      <div class="card">
        <img
          id="artist-img"
          src="http://www.self-titledmag.com/wp-content/uploads/2018/04/Brian-Eno-2-2-1024x684.jpeg"
        />
        <p class="artist-name">Brian Eno</p>
      </div>
      <div class="card">
        <img id="artist-img" src="https://i1.sndcdn.com/avatars-000001254237-bhfhsf-t500x500.jpg" />
        <p class="artist-name">Vanilla</p>
      </div>
      <div class="card">
        <img
          id="artist-img"
          src="https://images.sxsw.com/kIPuU7_nbeqAXfafzOZFBxG8CSU=/0x823:4912x4332/950x0/images.sxsw.com/3/31fcc915-eb7b-44dd-ad91-032b41e23818/artist-10900"
        />
        <p class="artist-name">Sam Gellaitry</p>
      </div>
      <div class="card">
        <img id="artist-img" src="https://i.ytimg.com/vi/vS4F8Yoto6A/maxresdefault.jpg" />
        <p class="artist-name">Men I Trust</p>
      </div>
      <div class="card">
        <img id="artist-img" src="https://itswide.com/wp-content/uploads/2018/07/descarga.jpeg" />
        <p class="artist-name">Melo-Zed</p>
      </div>
      <div class="card">
        <img
          id="artist-img"
          src="https://lastfm.freetls.fastly.net/i/u/ar0/62d210110f96883a691fd1109b93068d.jpg"
        />
        <p class="artist-name">HM Surf</p>
      </div>
    </div>
  </div>
</template>

<script>
import Tests from "../tests/Tests.vue";

export default {
  name: "Home",
  components: {
    Tests
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/global.scss";

p {
  margin: 0;
}

.home {
  font-size: 22px;
}

.card {
  @extend %hover;
  background-color: #1d1f20;
  color: white;
  padding: 1rem;
  height: 250px;
  border-radius: 5px;

  p {
    margin-top: 15px;
  }
}

.artist-name {
  // text-align: left;
}

// .artist-token-price {
//   margin-top: -24px !important;
//   background-color: none;
//   text-align: right;
// }

#card-grid {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-gap: 1rem;
  transition: 1.5s;
}

@media (min-width: 600px) {
  #card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  #card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
