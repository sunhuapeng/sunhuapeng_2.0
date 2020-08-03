<!--
 * @Author: sunhuapeng
 * @Date: 2020-07-30 12:57:46
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-08-03 09:23:33
-->
<template>
  <div id="app">
    <transition name="loading">
      <Loading v-if="showLoading"></Loading>
    </transition>
    <nav-bar v-if="$route.path!=='/articledetail'"></nav-bar>
    <router-view></router-view>
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
    };
  },
  mounted() {
    // new ReadFile();
    // this.$loading.open()
    // setTimeout(()=>{
    //   this.$loading.close()
    // }, 2000)
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
