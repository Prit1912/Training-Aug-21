import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'

const userStore = createStore({
    plugins: [
        createPersistedState()
      ],
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
      },
      actions: {
        setToken ({commit}, token) {
          commit('setToken', token)
        },
        setUser ({commit}, user) {
          commit('setUser', user)
        },
      }
})

export {userStore}