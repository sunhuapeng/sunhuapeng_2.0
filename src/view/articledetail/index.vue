<!--
 * @Author: sunhuapeng
 * @Date: 2020-07-31 15:37:37
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-31 16:36:08
-->
<template>
  <div class="article-detail">
    文章内容
    <mavon-editor
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
      // this.articleName;
      console.log(this.articleId)
      import(`../../../public/md/${this.articleName}.md`).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style></style>
