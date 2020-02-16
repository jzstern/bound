<template>
  <div class="charts-container">
    <Charts v-if="loaded" :chartdata="chartdata" :options="options" />
  </div>
</template>

<script>
import Charts from "./Charts.vue";

export default {
  name: "ChartsContainer",
  components: { Charts },
  data: () => ({
    loaded: false,
    chartdata: null
  }),
  async mounted() {
    this.loaded = false;
    try {
      const { userlist } = await fetch("/api/userlist");
      this.chartdata = userlist;
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  }
};
</script>

<style></style>
