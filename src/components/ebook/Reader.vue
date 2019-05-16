<template>
  <div class="reader">
    <div ref="read"></div>
  </div>
</template>

<!--suppress JSUnresolvedFunction, JSIgnoredPromiseFromCall -->
<script>
  import EPub from 'epubjs'
  import { mapGetters } from 'vuex'

  global.ePub = EPub

  export default {
    name: 'Reader',
    mounted () {
      const fileName = this.$route.params.fileName.split('|').join('/')
      console.log(fileName)
      this.$store.dispatch('setFileName', fileName).then(() => {
        this.initEPub()
      })
    },
    computed: {
      ...mapGetters(['fileName'])
    },
    methods: {
      initEPub () {
        this.book = new EPub(`http://localhost:9000/epub/${this.fileName}`)
        this.renderation = this.book.renderTo(this.$refs.read, {
          width: innerWidth,
          height: innerHeight,
          method: 'default'
        })
        this.renderation.display()
      }
    }
  }
</script>

<style scoped>

</style>
