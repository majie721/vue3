import { createApp, nextTick, VueElement } from 'vue'
import 'ant-design-vue/dist/antd.css';
import * as Icons from "@ant-design/icons-vue"
import App from './App.vue'
import router from './router'
import store from './stores'
import '@/assets/style/main.scss'

const app = createApp(App)
app.use(store).use(router)




//antdv 的icon的数据
app.config.globalProperties.$icons = Icons;
let key: keyof typeof Icons
for (key in Icons) {
    app.component(key, Icons[key])
}

app.mount('#app')


