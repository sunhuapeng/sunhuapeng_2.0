<template>
  <div class="game-maze">
      <iframe :src="iframeUrl" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
    data() {
        return { 
            iframeUrl: ''
        }
    },
    mounted () {
        this.iframeUrl = 'iframe/game-maze/maze.html'
    }
}
</script>

<style lang="scss" scoped>
.game-maze{
    height: 100%;
    width: 100%;
}
</style>