/*
 * @Author: sunhuapeng
 * @Date: 2020-07-30 14:29:30
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-31 16:20:44
 */

import Vue from "vue";
import Router from "vue-router";
import BeforeEach from "./beforeEach.js";

const home = () => import("@/view/home/index.vue");
const articlelist = () => import("@/view/articlelist/index.vue");
const articleDetail = () => import("@/view/articledetail/index.vue");
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      name: "home",
      meta: {
        deep: false,
      },
      component: home,
    },
    {
      path: "/articlelist",
      name: "articlelist",
      meta: {
        deep: true,
      },
      component: articlelist,
    },
    {
      path: "/articledetail",
      name: "articledetail",
      meta: {
        deep: false,
      },
      component: articleDetail,
    },
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
new BeforeEach(router);
export default router;
