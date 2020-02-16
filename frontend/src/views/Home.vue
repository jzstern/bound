<template>
  <div class="home">
    <h1>Home</h1>
    <Tests/>
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

<style lang="scss">
@import "../styles/global.scss";

</style>