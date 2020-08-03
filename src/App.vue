<!--
 * @Author: sunhuapeng
 * @Date: 2020-07-30 12:57:46
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-08-03 15:51:13
-->
<template>
  <div id="app">
    <transition name="loading">
      <Loading v-if="showLoading"></Loading>
    </transition>
    <nav-bar v-if="$route.path !== '/articledetail'"></nav-bar>
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
    this.$loading.open();
    document.onreadystatechange = ()=> {
      if (document.readyState == "complete") {
        console.log('加载完毕')
        this.$loading.close();
      }
    };
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
