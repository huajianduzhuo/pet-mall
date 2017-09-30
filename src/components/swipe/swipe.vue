<template>
  <mt-swipe :auto="2500">
    <mt-swipe-item v-for="(item, index) in imgList" :key="index">
      <a href="javascript:;">
        <img :src="item.image" alt="">
      </a>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  props: {
    imgList: Array
  }
}
</script>

<style scoped lang='stylus'>
.mint-swipe
  height 160px
  .mint-swipe-items-wrap
    .mint-swipe-item
      a 
        display block
        width 100%
        img 
          width 100%
</style>