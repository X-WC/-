import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 配置路由
import router from './router'
// 导入字体样式
import './assets/fonts/iconfont.css'
// 导入全局样式
import './assets/styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
