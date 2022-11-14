import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/antd.css';



import App from './App.vue'
import router from './router'

import '@/assets/style/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)



app.mount('#app')
