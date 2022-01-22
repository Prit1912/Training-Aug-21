import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
import {userStore} from './store/user'

createApp(App).use(userStore).use(router).mount('#app')