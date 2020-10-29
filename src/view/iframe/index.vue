<template>
  <div class="iframe">
    <iframe v-if="iframesrc" :src="iframesrc" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data(){
    return {
      iframesrc: ''
    }
  },
  mounted(){
    console.log('this.$route.url', this.$route.query.url)
    this.iframesrc = this.$route.query.url
  }
}
</script>

<style scoped lang="scss">
.iframe{
  height: 100%;
}
</style>