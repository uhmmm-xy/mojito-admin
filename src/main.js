import { createApp } from 'vue'
import { createPinia } from "pinia"
import i18n from '@/lang/index'
import router from '@/router'
import App from './App.vue'
import * as Icons from '@element-plus/icons-vue'
import '@/assets/css/index.css'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-notification.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import ElementPlus from 'element-plus'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia).use(router).use(i18n)

for (const iconName in Icons) {
  if (Reflect.has(Icons, iconName)) {
    app.component(iconName, Icons[iconName])
  }
}

app.use(ElementPlus,{locale})

app.mount('#app')

