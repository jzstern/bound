<template>
  <div id="prizes">
    <h3>Rewards</h3>
    <div id="locked" v-show="!prizesUnlocked">
      <div id="locked-content">
        <img id="lockIcon" src="../assets/lock.svg" />
        <p>Buy this artist's token to unlock their content</p>
      </div>
    </div>

    <div id="unlocked-grid" v-show="prizesUnlocked">
      <div class="card" @click="redeemPrize = true"><p>Exclusive Song</p></div>
      <div class="card"><p>2 Concert Tickets</p></div>
      <div class="card"><p>VIP</p></div>
      <div class="card"><p>1 on 1</p></div>
      <div class="card"><p>Song</p></div>
      <div class="card"><p>Concert</p></div>
    </div>

    <RedeemPrize @close="redeemPrize = false" v-show="redeemPrize" />
  </div>
</template>

<script>
import RedeemPrize from "../components/RedeemPrize.vue";

export default {
  name: "prizes",
  props: { prizesUnlocked: Boolean },
  components: {
    RedeemPrize
  },
  data() {
    return {
      redeemPrize: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/global.scss";

#locked {
  height: 600px;
  // border: 2px solid black;
  border-radius: 20px;
  color: white;
  font-family: "Syne";
  background: linear-gradient(224.38deg, #000000 1.05%, #537466 100%);
  background-size: 400% 400%;

  -webkit-animation: gradientRotate 6s linear infinite;
  -moz-animation: gradientRotate 6s linear infinite;
  animation: gradientRotate 6s linear infinite;
}

#locked-content {
  @extend %center;
  line-height: 200%;
  font-size: 24px;
}

#prizes {
  position: relative;
  margin: auto;
  max-width: 1130px;
  margin-top: 50px;
}

#unlocked-grid {
  position: absolute;
  top: 100px;
  left: 0;
  width: 1130px;
  margin: auto;
  display: grid;
  grid-gap: 1rem;
  transition: 1.5s;
  z-index: -50;
}

.card {
  //   background-color: #1d1f20;
  @extend %center;
  cursor: pointer;
  color: #1d1f20;
  padding: 1rem;
  font-family: "Syne";
  font-size: 24px;
  color: white;
  height: 250px;
  border-radius: 10px;
  border: 1px solid #1d1f20;
  background: radial-gradient(
    114.92% 114.92% at 50% -14.92%,
    rgba(6, 0, 251, 0.76) 25%,
    #a624bd 50.14%,
    #db4d7f 74.96%,
    rgba(255, 191, 0, 0.96) 100%
  );

  p {
    @extend %center;
  }
}

@-webkit-keyframes gradientRotate {
  0% {
    background-position: 0% 74%;
  }
  50% {
    background-position: 100% 27%;
  }
  100% {
    background-position: 0% 74%;
  }
}
@-moz-keyframes gradientRotate {
  0% {
    background-position: 0% 74%;
  }
  50% {
    background-position: 100% 27%;
  }
  100% {
    background-position: 0% 74%;
  }
}
@keyframes gradientRotate {
  0% {
    background-position: 0% 74%;
  }
  50% {
    background-position: 100% 27%;
  }
  100% {
    background-position: 0% 74%;
  }
}
</style>
