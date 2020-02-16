<template>
  <div class="home">
    <div id="card-grid">
      <router-link to="/artist">
        <div class="card">
          <img id="artist-img" :src="imgUrl" />
          <h2>{{ artistName }}</h2>
          <h5>Price: {{ amount }} ETH</h5>
          Kaytranada
        </div>
      </router-link>
      <div class="card">Madlib</div>
      <div class="card">Khraungbin</div>
      <div class="card">Joe Hertz</div>
      <div class="card">HM Surf</div>
      <div class="card">Frank Ocean</div>
      <div class="card">Philip Glass</div>
      <div class="card">Brian Eno</div>
      <div class="card">Vanilla</div>
      <div class="card">Sam Gellaitry</div>
      <div class="card">Men I Trust</div>
      <div class="card">Melo-Zed</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
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
  background-color: #1d1f20;
  color: white;
  padding: 1rem;
  height: 250px;
  border-radius: 5px;
}

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
