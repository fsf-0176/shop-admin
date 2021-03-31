import * as api from '@/api'

const state = {
  userInfo: ''
}

const mutations = {
  login: (state, data) => {
    console.log(data, '>>>>>')
    state.userInfo = data
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
