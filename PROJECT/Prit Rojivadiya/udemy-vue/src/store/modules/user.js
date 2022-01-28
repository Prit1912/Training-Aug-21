export const user = {
    namespaced: true,
    strict: true,
    state: {
        user: null,
        token: null,
        isLoggedIn: false,
    },
    mutations: {
        setToken (state, token) {
          state.token = token
          state.isLoggedIn = !!(token)
        },
        setUser (state, user) {
          state.user = user
        },
        logout (state){
          state.user = null
          state.token = null
          state.isLoggedIn = false
        }
      },
      actions: {
        setToken ({commit}, token) {
          commit('setToken', token)
        },
        setUser ({commit}, user) {
          commit('setUser', user)
        },
        logout({commit}){
          commit('logout')
        }
      }
}
