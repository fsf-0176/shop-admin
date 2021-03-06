const axios = require('axios')
axios.defaults.baseURL = process.env.VUE_APP_SERVER_API_PATH + process.env.VUE_APP_API_PATH
// 请求发送前
axios.interceptors.request.use(configs => {
  try {
    const authorization = localStorage.getItem('auth')
    if (authorization) {
      configs.headers.common.authorization = authorization
    }
  } catch (error) {

  }
  return configs
})
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log(error)
  }
)

export const login = data => {
  return axios({
    method: 'post',
    url: '/admin/login',
    data
  })
}

export const users = data => {
  return axios({
    method: 'get',
    url: '/admin/user',
    params: data
  })
}

export const trolley = data => {
  return axios({
    method: 'get',
    url: '/admin/shopcart',
    params: data
  })
}

export const goods = data => {
  return axios({
    method: 'get',
    url: '/admin/goods',
    params: data
  })
}

export const drop = data => {
  return axios({
    method: 'get',
    url: '/admin/drop',
    params: data
  })
}

export const onsale = data => {
  return axios({
    method: 'get',
    url: '/admin/onsale',
    params: data
  })
}

export const out = data => {
  return axios({
    method: 'get',
    url: '/admin/out',
    params: data
  })
}

export const category = data => {
  return axios({
    method: 'get',
    url: '/admin/category'
  })
}

export const order = data => {
  return axios({
    method: 'get',
    url: '/admin/order',
    params: data
  })
}

export const showSetting = data => {
  return axios({
    method: 'get',
    url: '/admin/show-setting'
  })
}

export const ad = data => {
  return axios({
    method: 'get',
    url: '/admin/ad'
  })
}

export const notice = data => {
  return axios({
    method: 'get',
    url: '/admin/notice'
  })
}

export const supers = data => {
  return axios({
    method: 'get',
    url: '/admin/super'
  })
}

export const setGoodsStatus = data => {
  return axios({
    method: 'post',
    url: '/admin/setGoodsStatus',
    data
  })
}

export const delGoods = data => {
  return axios({
    method: 'post',
    url: '/admin/delGoods',
    data
  })
}

export const setOrder = data => {
  return axios({
    method: 'post',
    url: '/admin/setOrder',
    data
  })
}

export const delNoticeSetting = data => {
  return axios({
    method: 'post',
    url: '/admin/delNoticeSetting',
    data
  })
}
