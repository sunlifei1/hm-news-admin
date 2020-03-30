//导入vue
import Vue from 'vue'
//导入vuerouter
import VueRouter from 'vue-router'
//使用vuerouter
Vue.use(VueRouter)

//导入page组件
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'

//创建vueRouter实例
const Router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    }
  ]
})
export default Router
