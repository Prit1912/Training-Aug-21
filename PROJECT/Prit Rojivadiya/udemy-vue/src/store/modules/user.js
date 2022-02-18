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

        // set token
        setToken ({commit}, token) {
          commit('setToken', token)
        },

        // set user 
        setUser ({commit}, user) {
          commit('setUser', user)
        },

        // logout
        logout({commit, dispatch}){
          dispatch('courses/setUpdatedCourses',[],{root: true})
          dispatch('courses/setSearchedCourses',[],{root: true})
          dispatch('courses/setFilteredCourses',[],{root: true})
          dispatch('courses/setCategoryId',"all",{root: true})
          dispatch('courses/setSubCategoryId',"all",{root: true})
          dispatch('courses/setSearchedString',null,{root: true})
          dispatch('courses/setSelectedFilter',"all",{root: true})
          commit('logout')
        }
      }
}
