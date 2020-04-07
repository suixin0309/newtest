// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import lodash from 'lodash'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/css/style.css'

import request from './api/request-plugin'
import apiUri from "./api/api";
import { message} from 'ant-design-vue';
Vue.prototype.$message = message

Vue.config.productionTip = false
Vue.use(request)
Vue.use(lodash)
Vue.use(Antd)
Vue.prototype.apiUri = apiUri
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  // if (!store.state.UserToken) {
  //   if (
  //     to.matched.length > 0 &&
  //     !to.matched.some(record => record.meta.requiresAuth)
  //   ) {
  //     next()
  //   } else {
  //     next({ path: '/login' })
  //   }
  // }
  // else {
    /* 现在有token了 */
  if (store.state.permission.permissionList<1) {
      /* 如果没有permissionList，真正的工作开始了 */
      store.dispatch('FETCH_PERMISSION').then(() => {
        next({ path: to.path })
      })
    } else {
      if (to.path !== '/login') {
        next()
      } else {
        next(from.fullPath)
      }
    }
  // }
})
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
