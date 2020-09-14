<!--
 * @Author: sunhuapeng
 * @Date: 2020-07-31 09:37:51
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-31 14:36:48
-->
/* * @Author: sunhuapeng * @Date: 2020-07-31 09:37:51 * @LastEditors: sunhuapeng
* @LastEditTime: 2020-07-31 09:37:52 */
<template>
  <div class="nav">
    <ul>
      <li
        class="nav-li skewX"
        :class="getNavdeepstyle ? 'nav-deep' : 'nav-light'"
        v-for="nav in navList"
        :key="nav.id"
        v-show="nav.path !== $route.path"
        @click="toRoute(nav.path)"
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
      navStyle: "light",
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
          id: "3",
        },
        {
          path: "/about",
          name: "关于网站",
          id: "4",
        },
        {
          path: "/gamemaze",
          name: "迷宫游戏",
          id: "5",
        },
        {
          path: "/market",
          name: "商场3D案例",
          id: "6",
        },
      ],
    };
  },
  methods: {
    toRoute(path) {
      this.$router.push(path);
    },
  },
  computed: {
    getNavdeepstyle() {
      return this.$store.getters["navdeepstyle"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
