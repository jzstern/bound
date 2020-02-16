<template>
  <div id="app">
    <Navbar />
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
// const fm = new Fortmatic("pk_test_F64FF8191AA41844");
// const web3 = new Web3(fm.getProvider());

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "UltraSystem";
  src: url("./assets/ultra-system.ttf");
}

@font-face {
  font-family: "Syne";
  src: url("./assets/Syne-Bold.ttf");
}

@font-face {
  font-family: "SF";
  src: url("./assets/SF-Regular.otf");
}

#app {
  font-family: "SF", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // background-color: #f1f3f8;
  color: #2c3e50;
  transition: 2s;
}

h3 {
  font-family: "Syne";
  font-size: 32px;
  text-align: left;
  margin-bottom: 16px;
}

#content {
  padding-top: 80px !important;
}

.slide-fade-enter-active {
  transition: all 1.8s ease;
}
.slide-fade-leave-active {
  transition: all 1.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  // transform: translateY(10px);
  opacity: 0;
}
</style>
