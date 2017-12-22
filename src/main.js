// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import reportError from './cores/reportError'
import './styles'
import components from './components'

Vue.use(components)

// 提示
Vue.config.productionTip = false

// 错误日志收集
Vue.config.errorHandle = reportError

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
