import Vue from 'vue'
import Router from 'vue-router'
import error404 from '../view/error/404.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: resolve => require(['../view/home.vue'], resolve)
    },

    {
      path: '*',
      name: 'error404',
      component: error404
    }
  ]
})

export default router
