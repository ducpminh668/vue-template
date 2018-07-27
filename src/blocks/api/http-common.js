import axios from 'axios'
import API_CONSTANT from '@/constants/api.constant'
require('promise.prototype.finally').shim()

export const HTTP = axios.create({
  baseURL: API_CONSTANT.BASE_API,
  config: {
    crossDomain: true,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
})

HTTP.interceptors.response.use(
  function (response) {
    if (response.data.status === 2) {
      HTTP.get('/refresh_token', {
        headers: {
          'app-token': response.config.headers['app-token'],
          'code-refresh': response.data.code_refresh,
          'api-key': 'praisethesun'
        }
      }).then(res => {
        console.log('refresh done')
        HTTP(response.config)
      })
    }
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
