import * as api from '@/api'

const state = {
  userInfo: '',
  users: [],
  trolley: [],
  goods: [],
  category: []
}

const mutations = {
  login: (state, data) => {
    state.userInfo = data
  },
  users: (state, data) => {
    console.log(data)
    state.users = data
  },
  trolley: (state, data) => {
    state.trolley = data
  },
  goods: (state, data) => {
    state.goods = data
  },
  category: (state, data) => {
    state.category = data
  }
}

const actions = {
  login: async ({ commit }, data) => {
    try {
      const res = await api.login(data)
      commit('login', res.data)
      return res
    } catch (error) {

    }
  },
  users: async ({ commit }, data) => {
    try {
      const res = await api.users(data)
      commit('users', res.data)
      return res
    } catch (error) {

    }
  },
  trolley: async ({ commit }, data) => {
    try {
      const res = await api.trolley(data)
      commit('trolley', res.data)
      return res
    } catch (error) {

    }
  },
  goods: async ({ commit }, data) => {
    try {
      const res = await api.goods(data)
      commit('goods', res.data)
      return res
    } catch (error) {

    }
  },
  category: async ({ commit }) => {
    try {
      const res = await api.category()
      commit('category', res.data)
      return res
    } catch (error) {

    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
