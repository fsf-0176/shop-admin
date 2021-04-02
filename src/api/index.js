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
    alert(error)
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
    url: '/admin/user'
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

export const category = data => {
  return axios({
    method: 'get',
    url: '/admin/category'
  })
}
