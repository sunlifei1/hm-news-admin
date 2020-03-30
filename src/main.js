import Vue from 'vue'
import App from './App.vue'
import router from './route/index'
import './styles/base.less'

//---------------------------导入element-ui-----------------------------
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)

//---------------------------导入axios---------------------------------
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
