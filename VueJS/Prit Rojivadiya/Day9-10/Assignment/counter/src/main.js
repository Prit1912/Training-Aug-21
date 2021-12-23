import { createApp } from 'vue'
import App from './App.vue'
import {counterStore} from './store/index'

createApp(App).use(counterStore).mount('#app')
