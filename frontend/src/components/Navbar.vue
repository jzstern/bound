<template>
  <div id="navbar">
    <router-link to="/">
      <p id="logo">Bound</p>
    </router-link>
    <router-link to="/artist">Artist</router-link>
    <Wallet />
  </div>
</template>

<script>
import Wallet from "./Wallet.vue";

export default {
  name: "Navbar",
  components: {
    Wallet
  }
};
</script>

<style lang="scss">
@import "../styles/global.scss";

#logo {
  margin-left: 20px;
  font-weight: bold;
}

#navbar {
  width: 100%;
  height: 60px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
