/*
 * @Author: sunhuapeng
 * @Date: 2020-07-30 14:32:15
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-30 14:39:40
 */ 
import Vue from 'vue'
import Vuex from 'vuex'
import evidence from './modules/evidence'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    evidence
  },
})