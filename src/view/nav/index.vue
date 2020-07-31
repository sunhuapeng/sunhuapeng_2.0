<!--
 * @Author: sunhuapeng
 * @Date: 2020-07-31 09:37:51
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-31 10:48:27
-->
/* * @Author: sunhuapeng * @Date: 2020-07-31 09:37:51 * @LastEditors: sunhuapeng
* @LastEditTime: 2020-07-31 09:37:52 */
<template>
  <div class="nav">
    <ul>
      <li
        class="nav-li"
        v-for="nav in navList"
        :key="nav.id"
        v-show="nav.path !== $route.path"
      >
        <div class="nav-item">
          <div class="left-corner">
            <div></div>
          </div>
          <div class="nav-text" v-text="nav.name"></div>
          <div class="right-corner">
            <div></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          path: "/home",
          name: "回到首页",
          id: "1",
        },
        {
          path: "/articlelist",
          name: "文章分类",
          id: "2",
        },
        {
          path: "/demo",
          name: "个案分析",
          id: "2",
        },
        {
          path: "/about",
          name: "关于网站",
          id: "3",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
