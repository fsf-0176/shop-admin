import * as api from '@/api'

const state = {
  userInfo: '',
  users: {},
  trolley: {},
  goods: {},
  category: [],
  order: [],
  showSetting: [],
  ad: {},
  notice: {},
  supers: {}
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
    data.forEach(item => {
      item.is_category = item.is_category === 1
      item.is_show = item.is_show === 1
      item.show_index = item.show_index === 1
    })
    state.category = data
  },
  order: (state, data) => {
    state.order = data
  },
  showSetting: (state, data) => {
    state.showSetting = data
  },
  ad: (state, data) => {
    state.ad = data
  },
  notice: (state, data) => {
    state.notice = data
  },
  supers: (state, data) => {
    state.supers = data
  },
  delGoods: (state, { data }) => {
    if (data.affectedRows > 0) {
      const res = {}
      res.data = state.goods.data.filter(item => item.id !== data.id)
      res.count = state.goods.count - 1
      state.goods = res
      console.log(2)
      console.log(data, res)
    }
  },
  setOrder: (state, { data }) => {
    if (data.affectedRows > 0) {
      state.goods.data.forEach(item => {
        if (item.id === data.id) {
          item.order = data.order
        }
      })
    }
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
  drop: async ({ commit }, data) => {
    try {
      const res = await api.drop(data)
      commit('goods', res.data)
      return res
    } catch (error) {

    }
  },
  onsale: async ({ commit }, data) => {
    try {
      const res = await api.onsale(data)
      commit('goods', res.data)
      return res
    } catch (error) {

    }
  },
  out: async ({ commit }, data) => {
    try {
      const res = await api.out(data)
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
  },
  order: async ({ commit }, data) => {
    try {
      const res = await api.order(data)
      commit('order', res.data)
      return res
    } catch (error) {

    }
  },
  showSetting: async ({ commit }) => {
    try {
      const res = await api.showSetting()
      res.data.forEach(item => {
        item.notice = item.notice + ''
        item.banner = item.banner + ''
        item.channel = item.channel + ''
        item.index_banner_img = item.index_banner_img + ''
      })
      commit('showSetting', res.data)
      return res
    } catch (error) {

    }
  },
  ad: async ({ commit }) => {
    try {
      const res = await api.ad()
      commit('ad', res.data)
      return res
    } catch (error) {

    }
  },
  notice: async ({ commit }) => {
    try {
      const res = await api.notice()
      commit('notice', res.data)
      return res
    } catch (error) {

    }
  },
  supers: async ({ commit }) => {
    try {
      const res = await api.supers()
      commit('supers', res.data)
      return res
    } catch (error) {

    }
  },
  setGoodsStatus: async ({ commit }, data) => {
    const res = await api.setGoodsStatus(data)
    commit('setGoodsStatus', res.data)
    return res
  },
  delGoods: async ({ commit }, data) => {
    const res = await api.delGoods(data)
    commit('delGoods', res.data)
    return res
  },
  setOrder: async ({ commit }, data) => {
    const res = await api.setOrder(data)
    commit('setOrder', res.data)
    return res
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
