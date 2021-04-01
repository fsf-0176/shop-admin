import * as api from '@/api'

const state = {
  userInfo: '',
  users: []
}

const mutations = {
  login: (state, data) => {
    state.userInfo = data
  },
  users: (state, data) => {
    console.log(data)
    state.users = data
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
