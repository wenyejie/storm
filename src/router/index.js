import Vue from 'vue'
import Router from 'vue-router'
import error404 from '../view/error/404.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['../view/index.vue'], resolve)
    },

    {
      path: '/checkbox',
      name: 'checkbox',
      component: resolve => require(['../view/checkbox.vue'], resolve)
    },

    {
      path: '/panel',
      name: 'panel',
      component: resolve => require(['../view/panel.vue'], resolve)
    },

    {
      path: '*',
      name: '404',
      meta: {
        title: '404'
      },
      component: error404
    }
  ]
})

export default router
