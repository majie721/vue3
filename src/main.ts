import { createApp, nextTick, VueElement } from 'vue'

import 'ant-design-vue/dist/antd.css';
import * as Icons from "@ant-design/icons-vue"
import App from './App.vue'
import pinia from './stores'
import router from './router'
import vueI18n from '@/lang/index'
import '@/assets/style/main.scss'
const app = createApp(App)
app.use(vueI18n).use(pinia).use(router)
//antdv 的icon的数据
app.config.globalProperties.$icons = Icons;
let key: keyof typeof Icons
for (key in Icons) {
    app.component(key, Icons[key])
}

app.mount('#app')


