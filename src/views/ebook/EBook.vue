<template>
  <div class="ebook">
    <reader></reader>
  </div>
</template>

<script>
  import Reader from '@/components/ebook/Reader'
  import { mapGetters } from 'vuex'

  export default {
    name: 'EBook',
    components: { Reader },
    computed: {
      ...mapGetters(['fileName'])
    },
    mounted () {
      console.log('EBook>>>' + this.$store.state.book.fileName)
      console.log('EBook>>>' + this.fileName)
    }
  }
</script>

<style lang="stylus" scoped>

</style>
