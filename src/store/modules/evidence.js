/*
 * @Author: sunhuapeng
 * @Date: 2020-07-30 14:32:15
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-30 16:09:39
 */ 

const state = {
  loading: null
}

// getters
const getters = {
  loading: state => state.loading
}

// actions
const actions = {
  loading({ commit }, obj) {
    commit('loading', obj)
  }
}

// mutations
const mutations = {
  // data 载荷
  loading(state, data) {
    state.loading = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
