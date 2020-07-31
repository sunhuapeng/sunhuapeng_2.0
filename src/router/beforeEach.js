/*
 * @Author: sunhuapeng
 * @Date: 2020-07-31 11:40:39
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-31 12:29:23
 */

import Store from "@/store";
export default class BeforeEach {
  router = null;
  constructor(router) {
    this.router = router;
    this.each();
  }
  each() {
    this.router.beforeEach((to, from, next) => {
      if (to.meta.deep) Store.dispatch("navdeepstyle", true);
      else Store.dispatch("navdeepstyle", false);
      next();
    });
  }
}
