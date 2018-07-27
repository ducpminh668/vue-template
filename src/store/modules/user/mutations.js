import { HTTP } from '@/blocks/api/http-conmon'

export default {
  login (state, payload) {
    localStorage.setItem('user', JSON.stringify(payload.user))
    localStorage.setItem('token', payload.token)
    HTTP.defaults.headers.common['app-token'] = payload.token
    state.currentUser = payload.user
    state.newUser = payload.user
    state.token = payload.token
  }
}
