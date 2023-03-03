import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/router"
const app = createApp(App)
//加载路由模块
app.use(router)
app.mount('#app')
