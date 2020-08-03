<!--
 * @Author: sunhuapeng
 * @Date: 2020-07-31 15:37:37
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-08-03 15:07:14
-->
<template>
  <div class="article-detail">
    <div class="article-title">
      <div class="article-title-main w">
        <div class="art-name-area"><p class="art-name" v-text="articleName"></p></div>
      </div>
    </div>
    <mavon-editor
      class="w"
      v-if="article"
      v-html="article"
      :subfield="false"
      :defaultOpen="defaultData"
      :toolbarsFlag="false"
      :boxShadow="false"
      v-highlight
    />
  </div>
</template>

<script>
import "highlight.js/styles/googlecode.css";
import hljs from "highlight.js";
import Vue from "vue";

Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block, "html");
  });
});

export default {
  data() {
    return {
      articleId: "",
      article: "",
      articleName: "",
      defaultData: "preview",
      articleObj: {},
    };
  },
  mounted() {
    this.$loading.open()
    this.$readFile.init(() => {
      this.articleId = this.$route.query.id;
      this.articleObj = this.$readFile.getArticleById(this.articleId);
      if (this.articleObj) {
        this.articleName = this.articleObj.name;
        this.getArticleDetail();
      }
    });
  },
  methods: {
    getArticleDetail() {
      import(`../../../public/md/${this.articleName}.md`).then((res) => {
        this.article = res.default
        this.$nextTick(()=>{
          this.$loading.close()
        })
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
