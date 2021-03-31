const axios = require('axios')
axios.defaults.baseURL = process.env.VUE_APP_SERVER_API_PATH + process.env.VUE_APP_API_PATH
console.log(process.env)
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
    url: 'admin/login',
    data
  })
}
