/*
 * @Author: sunhuapeng
 * @Date: 2020-07-30 14:29:30
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-30 15:14:30
 */

import Vue from "vue";
import Router from "vue-router";

const home = () => import("@/view/home/index.vue");
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      name: "home",
      component: home,
    },
    {
      path: "*",
      redirect: "/home",
    },
  ],
});

export default router;
