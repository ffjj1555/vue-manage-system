import {createApp} from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import router from './router'
import { usePermissStore } from '@/store/permiss'
import 'element-plus/dist/index.css'
import './assets/css/icon.css'
import 'echarts'
import ECharts from 'vue-echarts'




const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);
const app = createApp(App)

app.component('ECharts', ECharts)
app.use(pinia)
app.use(router)
app.use(ElementPlus, {
    locale: zhCn,
})
// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// 自定义权限指令
const permiss = usePermissStore()
app.directive('permiss', {
    mounted(el, binding) {
        if(!permiss.key.includes(String(binding.value))){
            el['hidden'] = true;
        }
    }
})


app.mount('#app')