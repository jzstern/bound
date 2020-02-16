<template>
  <div id="artist-title">
    <p id="artist-name">Kaytranada</p>
    <div id="verified">
      <img src="../assets/verfied.svg" />
      <p>Official artist page</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "artistTitle"
};
</script>

<style lang="scss" scoped>
* {
  margin: 5px;
  color: #1d1f20;
}

#artist-name {
  font-size: 48px;
}

#verified {
  p {
    display: inline;
    opacity: 0.4;
    font-size: 18px;
  }
  img {
    transform: translateY(6px);
    margin-right: 10px;
    opacity: 1;
  }
}

#artist-title {
  font-family: "syne";
  text-align: left;
  margin: auto;
  margin-bottom: 50px;
  margin-top: 25px;
  max-width: 1130px;
  padding: 24px;
}
</style>
