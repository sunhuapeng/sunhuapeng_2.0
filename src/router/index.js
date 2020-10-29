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
const market = () => import("@/view/market/index.vue");
const gamemaze = () => import("@/view/game-maze/index.vue");
const Demo = () => import("@/view/demo/index.vue");
const iframe = () => import("@/view/iframe/index.vue");
const error = () => import("@/view/error/index.vue");

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "articlelist",
      redirect: "/articlelist",
      meta: {
        deep: false,
      },
      component: home,
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
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
      path: "/market",
      name: "market",
      meta: {
        deep: false,
      },
      component: market,
    },
    {
      path: "/gamemaze",
      name: "gamemaze",
      meta: {
        deep: false,
      },
      component: gamemaze,
    },
    {
      path: "/iframe",
      name: "iframe",
      meta: {
        deep: false,
      },
      component: iframe,
    },{
      path: '/error',
      name: 'error',
      component: error
    },
    {
      path: "*",
      redirect: "/articlelist",
    },
  ],
});
new BeforeEach(router);
export default router;
