import Vue from 'vue'
import Router from 'vue-router'
import Error404 from '../view/error/404.vue'
import Components from './components';
import Tools from './tools'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['../view/index.vue'], resolve)
    },

    Components,

    Tools,

    {
      path: '*',
      name: '404',
      meta: {
        title: '404'
      },
      component: Error404
    }
  ]
})

export default router
