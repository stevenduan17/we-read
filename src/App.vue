<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontsize = window.innerWidth / 10
    fontsize = fontsize > 50 ? 50 : fontsize
    html.style.fontSize = `${fontsize}px`
  })
</script>
<style lang="stylus" scoped>
  @import "assets/styles/global.styl"

  #app
    width 100%
    height 100%
    overflow hidden

</style>
