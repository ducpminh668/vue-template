import { HTTP } from '../http-conmon'

export default {
  loginApi (params) {
    let data = new FormData()
    data.append('email', params.email)
    data.append('password', params.password.toString())
    return HTTP.post('login', data)
      .then(response => {
        HTTP.defaults.headers.common['app-token'] = response.data.token
        return Promise.resolve(response.data)
      })
      .catch(error => Promise.reject(error))
  },
  registerApi (params) {
    let data = new FormData()
    data.append('username', params.username)
    data.append('email', params.email)
    data.append('password', params.password)
    return HTTP.post('register', data)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error))
  }
}
