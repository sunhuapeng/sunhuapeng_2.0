<!--
 * @Author: sunhuapeng
 * @Date: 2020-07-31 11:24:54
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-08-03 16:38:11
-->
<template>
  <div class="article-list">
    <ul class="article-class w">
      <li
        v-for="aclass in articleClassList"
        :key="aclass"
        v-text="aclass"
        @click="getArticleList(aclass)"
        :class="activeTag === aclass ? 'active-articleClass' : ''"
      ></li>
    </ul>
    <div class="list-contnet w">
      <ul class="scroll-main">
        <li v-for="data in articleList" :key="data.id">
          <p
            class="title skewX"
            v-text="data.name"
            @click="toDetail(data.id)"
          ></p>
          <div class="article-detail">
            <div class="article-content">
              <p class="abstract" v-text="data.brief"></p>
              <p class="date">{{ $formatDate(Number(data.date)) }}</p>
              <p class="date author">{{ data.author }}</p>
            </div>
            <div class="img">
              <img :src="data.coverPng" alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ReadFile from "@/common/js/read-file.js";

export default {
  name: 'art-list',
  data() {
    return {
      articleClassList: ["全部", "前端", "笔记", '3D', "小记", "美文", '转载', '原创'],
      articleList: [],
      readFile: [],
      activeTag: "",
    };
  },
  mounted() {
    this.articleList = []
    this.$readFile.init((list) => {
      this.articleList = list;
    });
  },
  methods: {
    getArticleList(tag) {
      this.activeTag = tag;
      this.articleList = this.$readFile.getArticleByTag(
        tag === "全部" ? "" : tag
      );
    },
    toDetail(id) {
      this.$router.push({
        path: '/articledetail',
        query: {
          id: id
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
