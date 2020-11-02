// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // 在页面中引入vue.js
import App from './App' // 引入自定义组件
import router from './router' // 引入vue route js
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'
import menus from '@/config/menu-config'
import Vuex from 'vuex'

Vue.component('icon', Icon)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(router)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({ // Vue全局实例
  el: '#app', // 绑定vue实例全局作用范围
  router, // 注册路由对象
  components: { App }, // 注册App组件
  template: '<App/>'
})

const routes = []
menus.forEach((item) => {
  item.sub.forEach((sub) => {
    routes.push({
      path: `/${sub.componentName}`,
      name: sub.componentName
    })
  })
})

// 导航卫士
// router.beforeEach((to, from, next) => {
//   if (to.path.startsWith('/account') && !user.Authenticated) {
//     next('/login')
//   } else {
//     next()
//   }
// })

// // 定义全局过滤器
// import * as custom from './test/common'
// Object.keys(custom).forEach(key => {
//   Vue.filter(key, custom[key])
// })

// const formatCode = Vue.filter('formatCode')
