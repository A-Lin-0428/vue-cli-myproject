import Vue from 'vue'
import App from './App.vue'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入公共样式
import '@/styles/index.less'

// 引入路由
import router from '@/router/index.js'
Vue.use(ElementUI)

// 设置导航守卫
router.beforeEach((to, from, next) => {
  // console.log(to);
  var token = localStorage.getItem('vue_cli_myproject');
  if (token || to.path === '/login') {
    next()
  } else {
    next({ name: 'login' })
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
