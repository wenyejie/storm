import Vue from "vue";
import Router from "vue-router";
import Components from "./components";
import Tools from "./tools";
import Directives from "./directives";
import isClient from '../utils/isClient';

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "rIndex",
      component: () => import("../view/index.vue")
    },

    Components,

    Tools,

    Directives,

    {
      path: "*",
      name: "r404",
      meta: {
        title: "404"
      },
      component: () => import("../view/error/404.vue")
    }
  ]
});

router.afterEach(() => {
  isClient && window.scrollTo(0, 0);
});

export const createRouter = () => router;
