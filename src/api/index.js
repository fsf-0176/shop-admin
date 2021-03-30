const axios = require('axios')

axios.default.baseUrl = process.env.VUE_APP_SERVER_API_PATH
// 请求发送前
axios.interceptors.request.use(configs => {
  try {
    const data = JSON.parse(localStorage.getItem('user'))
    if (data.authorization) {
      configs.headers.common.authorization = data.authorization
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
    url: 'api/admin/login',
    data
  })
}
