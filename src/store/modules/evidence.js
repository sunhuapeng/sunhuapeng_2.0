/*
 * @Author: sunhuapeng
 * @Date: 2020-07-30 14:32:15
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-30 14:34:05
 */ 

const state = {
  fileList: null
}

// getters
const getters = {
  fileList: state => state.fileList
}

// actions
const actions = {
  fileList({ commit }, obj) {
    commit('fileList', obj)
  }
}

// mutations
const mutations = {
  // data 载荷
  fileList(state, data) {
    state.fileList = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
