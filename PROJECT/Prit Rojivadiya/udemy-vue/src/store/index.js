import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';
import {user} from './modules/user'
import {courses} from './modules/courses'

export default createStore({
    plugins: [
        createPersistedState()
      ],
    modules:{
        user,
        courses,
    }
})