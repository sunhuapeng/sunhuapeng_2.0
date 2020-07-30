<!--
 * @Author: sunhuapeng
 * @Date: 2020-07-30 12:57:46
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-30 18:41:56
-->
<template>
  <div id="app">
    <transition name="loading">
      <Loading v-if="showLoading"></Loading>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
import ReadFile from "@/common/js/read-file.js";
export default {
  name: "App",
  data () {
    return {
      showLoading: false
    }
  },
  mounted() {
    new ReadFile();
    // this.$loading.open()
    // setTimeout(()=>{
    //   this.$loading.close()
    // }, 2000)
  },
  computed: {
    getLoading () {
      return this.$store.getters['loading']
    }
  },
  watch: {
    getLoading (value) {
      this.showLoading = value
    }
  }
};
</script>

<style>

</style>
