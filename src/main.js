import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 配置路由
import router from './router'

// 导入字体样式
import './assets/styles/fonts/iconfont.css'
// 导入全局样式
import './assets/styles/index.less'

// 加载动态设置REM 基准值
import 'amfe-flexible'

// 导入Vant组件库
import Vant from 'vant'

// 加载 Vant 全局样式
import 'vant/lib/index.css'

// 注册使用 vant 组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
