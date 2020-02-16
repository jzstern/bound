<template>
  <div id="navbar">
    <router-link to="/">
      <img src="../assets/boundLogo.svg" id="logo" />
    </router-link>
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
  a {
    text-decoration: none;
  }
  width: 100%;
  height: 65px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
