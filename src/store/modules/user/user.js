import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export const User = {
  namespaced: true,
  state: {
    currentUser: {
    },
    newUser: {},
    token: ''
  },
  getters: getters,
  actions: actions,
  mutations: mutations
}
