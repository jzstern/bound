<template>
  <div id="navbar">
    <router-link to="/">
      <p id="logo">Bound ##</p>
    </router-link>
    <router-link to="/artist">Artist</router-link>
    <div id="wallet-address">
      <div id="green-dot"></div>
      <p>0xc43r - 5gtd</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss">
@import "../styles/global.scss";

#green-dot {
  width: 6px;
  height: 6px;
  border-radius: 50px;
  margin-right: 5px;
  background: linear-gradient(180deg, #398557 0%, #33c16b 100%);
}

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

#wallet-address {
  width: 123px;
  height: 34px;
  background: #e3e5e8;
  border-radius: 4px;
  margin-top: 10px;
  margin-right: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #1d1f20;
    opacity: 0.6;
  }
}
</style>
