<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-body"></div>

        <div
          id="album-container"
          @mouseover="hover = true"
          @mouseleave="hover = false"
        >
          <img id="albumArt" src="../assets/KaytranadaAlbumArt.jpg" />
          <img
            id="play"
            @click="play"
            v-show="!playing && hover"
            src="../assets/playIcon.svg"
          />
          <img
            id="pause"
            @click="pause"
            v-show="playing && hover"
            src="../assets/pauseIcon.svg"
          />
        </div>

        <audio
          id="song"
          ref="KaytraSong"
          src="../assets/Kaytranada10.mp3"
        ></audio>

        <div
          class="btn"
          style="background-color:#398557; width:100%; margin:0; margin-bottom:10px; margin-top:10px;"
        >
          <p>Download Song</p>
        </div>
        <div
          class="btn btn-cancel"
          style="background-color:transparent; width:100%; margin:0; margin-bottom:20px; "
          @click="$emit('close')"
          src="../assets/CloseModal.svg"
        >
          <p style="color:black">Close</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RedeemPrize",
  data() {
    return {
      playing: false,
      hover: false
    };
  },
  methods: {
    play() {
      this.$refs.KaytraSong.play();
      this.playing = !this.playing;
    },
    pause() {
      this.$refs.KaytraSong.pause();
      this.playing = !this.playing;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/global.scss";

#album-container {
  position: relative;
  width: 100%;
  border-radius: 10px;
}

#albumArt {
  // position: a;
  width: 100%;
  border-radius: 10px;
}

#play {
  position: absolute;
  height: 50px;
  padding: 150px;
  @extend %center;
}

#pause {
  position: absolute;
  height: 50px;
  padding: 150px;
  @extend %center;
}

.btn-cancel {
  border: 1px solid grey;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  // height: 310px;
  width: 350px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  position: relative;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 300%;
  // transform: translateY(15px);
}

.close-modal {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  height: 25px;
  cursor: pointer;
}
</style>
