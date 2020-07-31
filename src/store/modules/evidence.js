/*
 * @Author: sunhuapeng
 * @Date: 2020-07-30 14:32:15
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-31 11:46:28
 */

const state = {
  loading: null,
  navdeepstyle: false,
};

// getters
const getters = {
  loading: (state) => state.loading,
  navdeepstyle: (state) => state.navdeepstyle,
};

// actions
const actions = {
  loading({ commit }, obj) {
    commit("loading", obj);
  },
  navdeepstyle({ commit }, obj) {
    commit("navdeepstyle", obj);
  },
};

// mutations
const mutations = {
  // data 载荷
  loading(state, data) {
    state.loading = data;
  },
  navdeepstyle(state, data) {
    state.navdeepstyle = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
