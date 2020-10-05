/*
 * @Author: sunhuapeng
 * @Date: 2020-07-30 12:57:46
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-31 17:40:26
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from "@/store"
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// 公共组件
import '@/common/js/component-views.js'
// 公共样式
import '@/common/style/clear.scss'
// 动画样式
import '@/common/style/animation.scss'
// 媒体查询
import '@/common/style/media.scss'
// 公共方法抽离
import global from './global'
Vue.config.productionTip = false

Vue.use(global)
Vue.use(mavonEditor)
Vue.prototype.$axios = axios
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")