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
        logout({commit, dispatch}){
          dispatch('courses/setUpdatedCourses',[],{root: true})
          dispatch('courses/setSearchedCourses',[],{root: true})
          dispatch('courses/setFilteredCourses',[],{root: true})
          dispatch('courses/setCategoryId',null,{root: true})
          dispatch('courses/setSubCategoryId',null,{root: true})
          dispatch('courses/setSearchedString',null,{root: true})
          commit('logout')
        }
      }
}
