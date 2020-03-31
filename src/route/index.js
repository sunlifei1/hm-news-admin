//导入vue
import Vue from 'vue'
//导入vuerouter
import VueRouter from 'vue-router'
//使用vuerouter
Vue.use(VueRouter)

//导入page组件
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import PostList from '../pages/PostList.vue'
import PostPublish from '../pages/PostPublish.vue'

//创建vueRouter实例
const Router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,

      children: [
        {
          path: '/',
          component: PostList,
          name: 'postlist'
        },
        {
          path: '/post-publish',
          component: PostPublish,
          name: 'postpublish'
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    }
  ]
})

//创建路由守卫
Router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.path != '/login' && !token) {
    next('/login')
  } else {
    next()
  }
})
export default Router
