<!--
 * @Author: sunhuapeng
 * @Date: 2020-07-30 12:57:46
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-30 15:15:56
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import ReadFile from "@/common/js/read-file.js";
export default {
  name: "App",
  mounted() {
    new ReadFile();
  },
};
</script>

<style></style>
