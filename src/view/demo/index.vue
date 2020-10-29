<template>
  <div class="demo">
    <ul>
      <li v-for="data in demoList" :key="data.id">
        <iframe :src="data.url" frameborder="0"></iframe>
        <p class="skewX" @click="toIframe(data)">{{ data.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      demoList: [],
    };
  },
  methods: {
    toIframe(data) {
      const { href } = this.$router.resolve({
        path: "/iframe",
        query: {
          url: data.url
        },
      });
      console.log(href)
      window.open(href, "_blank");
    },
  },
  mounted() {
    var filenameList = require
      .context("../../../public/html/中级案例html", true, /.(html)$/)
      .keys();
    console.log(filenameList);
    let htmlList = [];
    for (let i = 0; i < filenameList.length; i++) {
      const name = filenameList[i].split("./")[1];
      htmlList.push({
        name: name,
        url: `html/中级案例html/${name}`,
        id: i,
      });
    }
    this.demoList = htmlList;
    console.log(this.demoList);
  },
};
</script>

<style scoped lang="scss">
ul {
  display: flex;
  flex-wrap: wrap;
}
li {
  width: 260px;
  height: 260px;
  padding: 28px;
  text-align: center;
  iframe {
    height: 214px;
  }
  p {
    height: 46px;
    line-height: 46px;
    cursor: pointer;
  }
}
</style>
