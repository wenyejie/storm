import Vue from 'vue'
import Router from 'vue-router'
import Components from './components';
import Tools from './tools'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../view/index.vue')
    },

    Components,

    Tools,

    {
      path: '*',
      name: '404',
      meta: {
        title: '404'
      },
      component: () => import('../view/error/404.vue')
    }
  ]
});

export const createRouter = () => router
