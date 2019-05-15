<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      <span class="test">我是测试字体 I'm a test code.</span>
    </div>
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
<style lang="stylus">
  @import "assets/styles/global.styl"

  .test
    font-family "Days One"
    font-size px2rem(70)

</style>
