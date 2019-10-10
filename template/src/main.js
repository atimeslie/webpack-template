// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Fetch from '@/parse/fetch'

Vue.use(Fetch)
Vue.use(ElementUI)

// 动态注册base组件
import './componentRegister'

import Throttle from '@/components/abstract/throttle'
Vue.component('Throttle', Throttle)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
