<template>
  <div class="custom_title">
    <div class="center">
      <img :src="imgUrl" alt="">
    </div>
    <div class="more">
      <img src="https://img2.epetbar.com/nowater/2017-07/06/10/54d9f002646c397b6b19abefbe6c155b.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String
  }
}
</script>

<style scoped lang='stylus'>
.custom_title
  position relative
  width 100%
  padding-top 10px
  border-bottom 1px solid rgb(231, 231, 231)
  .center
    img
      display block
      max-width 50%
      max-height 73px
      margin 0 auto
  .more
    position absolute
    top 12px
    right 0
    img 
      float right
      width 50%
</style>