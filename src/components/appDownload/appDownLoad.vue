<template>
  <div v-show="appDownShow" class="download">
    <span class="close_btn" @click="showAppDownLoad">
      <img src="./closebtn_03.png" alt="">
    </span>
    <div class="down_img">
      <a href="javascript:;">
        <img src="./211547bb51dd23758f74fb86e9d7aae5.png" alt="">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    appDownShow: Boolean,
    showAppDownLoad: Function
  }
}
</script>

<style scoped lang='stylus'>
.download
  position relative
  .close_btn
    position absolute
    top 50%
    left 2%
    width 5%
    transform translateY(-50%)
    & > img 
      width 100%
      height 100%
  .down_img
    & > a
      display block
      & > img 
        width 100%
</style>