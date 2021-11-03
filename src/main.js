import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import '@/style/index.scss'
import Mui from "@/components";


createApp(App).use(Mui).use(router).mount('#app')
