<template>
  <div class="market">
    <!-- 123 -->
    <iframe :src="iframe.src" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: "market",
  data() {
    return {
      iframe: {
        src: "",
      },
    };
  },
  mounted() {
    console.log();
    this.iframe.src = `iframe/market/index.html`;
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>