/*
 * @Author: sunhuapeng
 * @Date: 2020-07-30 12:57:46
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-30 15:05:32
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from "@/store"

Vue.config.productionTip = false

Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")