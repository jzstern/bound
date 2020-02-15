<template>
  <div id="navbar">
    <p id="logo">Bound</p>
    <div id="wallet-address">
      <p>wallet address</p>
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

#logo {
  // position: absolute;
}

#navbar {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
}

#wallet-address {
  width: 123px;
  height: 34px;
  background: #e3e5e8;
  border-radius: 4px;
  margin-right: 50px;

  p {
    @extend %center;
    color: #1d1f20;
    opacity: 0.6;
  }
}
</style>
