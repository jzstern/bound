<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-body"></div>
        <audio id="song"></audio>
        <div
          @click="buyToken"
          class="btn"
          style="background-color:#398557; width:100%; margin:0; margin-bottom:10px;"
        >
          <p>Buy for 0.512343823 ETH</p>
        </div>
        <div
          class="btn btn-cancel"
          style="background-color:transparent; width:100%; margin:0; margin-bottom:20px; "
          @click="$emit('close')"
          src="../assets/CloseModal.svg"
        >
          <p style="color:black">Cancel</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Song"
};
</script>

<style lang="scss" scoped></style>
