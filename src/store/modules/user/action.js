import authService from '@/blocks/api/authService'

export default {
  login ({ commit }, user) {
    commit('LOGINING')
    return new Promise((resolve, reject) => {
      authService
        .loginApi(user)
        .then(response => {
          if (response.status === 1) {
            commit('login', response)
          }
          resolve(response)
        })
        .catch(error => reject(error))
        .finally(() => {
          commit('LOGINING_DONE')
        })
    })
  },
  register ({ commit }, user) {
    commit('REGISTERING')
    return new Promise((resolve, reject) => {
      authService
        .registerApi(user)
        .then(response => {
          commit('register', response)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
        .finally(() => {
          commit('REGISTERING_DONE')
        })
    })
  }
}
