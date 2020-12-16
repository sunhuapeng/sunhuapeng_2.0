<!--
 * @Author: sunhuapeng
 * @Date: 2020-07-30 12:57:46
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-08-03 16:04:14
-->
<template>
  <div id="app">
    <transition name="loading">
      <Loading v-if="showLoading"></Loading>
    </transition>
    <nav-bar v-show="noNav.indexOf($route.path)===-1"></nav-bar>
    <keep-alive :include="keepList">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import navBar from "./view/nav/index.vue";
export default {
  name: "App",
  components: {
    navBar,
  },
  data() {
    return {
      showLoading: false,
      keepList: ["art-list"],
      noNav: ['/articledetail', '/market', '/gamemaze', '/error', '/iframe']
    };
  },
  mounted() {
    // this.$loading.open();
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        // this.$loading.close();
      }
    };
  },
  computed: {
    getLoading() {
      return this.$store.getters["loading"];
    },
  },
  watch: {
    getLoading(value) {
      this.showLoading = value;
    },
  },
};
</script>

<style></style>
