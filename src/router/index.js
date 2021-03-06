// 在这里进行路由配置
// 引入vue
import Vue from 'vue'
// .引入vue-router
import VueRouter from 'vue-router'
// 1.引入路由组件
import Login from '@/views/login.vue'
import Home from '@/views/home.vue'
import Welcome from '@/views/welcome.vue'
import Users from '@/views/users/users.vue'
// 2.使用
Vue.use(VueRouter)
// 3.创建路由对象
var router = new VueRouter({
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: { name: 'login' }
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      redirect: { name: 'welcome' },
      children: [
        {
          name: 'welcome',
          path: 'welcome',
          component: Welcome
        },
        {
          name: 'users',
          path: 'users',
          component: Users
        }
      ]
    }
  ]
})

// 暴露router
export default router
