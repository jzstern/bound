<template>
  <div id="artist-title">
    <p id="artist-name">Kaytranada</p>
    <div id="verified">
      <img src="../assets/verfied.svg" />
      <p>Official artist page</p>
    </div>
    <div class="tokenOwnership" :class="{ own: prizesUnlocked, dontOwn: !prizesUnlocked }">
      {{ ownershipText }}
      <!-- {{ prizesUnlocked }} -->
    </div>
  </div>
</template>

<script>
export default {
  name: "artistTitle",
  computed: {
    ownershipText() {
      if (!this.prizesUnlocked) {
        return "You do not own this token";
      } else {
        return "You own this token";
      }
    }
  },
  props: { prizesUnlocked: Boolean },
  data() {
    return {
      ownership: false
    };
  }
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

.tokenOwnership {
  float: right;
  padding: 15px 20px;
  border-radius: 5px;
  background: rgba(211, 211, 211, 0.1);
  transform: translate(10px, -75px);
}

.dontOwn {
  border: 1px solid rgba(0, 0, 0, 0.5);
  opacity: 0.3;
}

.own {
  border: 1px solid rgb(38, 162, 0);
  opacity: 1;

  color: rgb(38, 162, 0);
}

#artist-title {
  font-family: "syne";
  text-align: left;
  margin: auto;
  margin-top: 24px;
  max-width: 1130px;
}
</style>
