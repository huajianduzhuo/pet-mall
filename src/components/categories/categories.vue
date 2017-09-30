<template>
  <div class="categories">
    <div class="header">
      <router-link to="/categories/sort" class="route sort" active-class="cbr">
        <span>
          分类
        </span>
      </router-link>
      <router-link to="/categories/brands" class="route brands" active-class="cbr">
        <span>
          品牌
        </span>
      </router-link>
      <a href="javascript:;" class="search">
        <span></span>
      </a>
    </div>
    <div class="wrap">
      <router-view :hideLoading="hideLoading"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showFooter: Function,
    hideLoading: Function
  },
  created () {
    this.showFooter(true);
  }
}
</script>

<style scoped lang='stylus'>
.categories
  position relative
  overflow hidden
  width 100%
  height 100%
  .header
    position relative
    border-bottom 1px solid #cbcbcb
    height 40px
    line-height 40px
    display flex
    .route
      display block
      flex 1
      font-size 13px
      color #333333
      font-weight 700
      float left
      span 
        display inline-block
        padding 0 5px
    .sort
        text-align right 
        padding-right 5%
    .brands
        text-align left 
        padding-left 5%
    .cbr
      color red
      span 
        border-bottom 1px solid red
    .search
      position absolute
      top 13px
      right 15px
      display block
      width 14px
      height 14px
      span 
        display block
        width 100%
        height 100%
        background url('./search-ico.png') no-repeat
        background-size contain
  .wrap
    position absolute
    top 41px
    bottom 46px
    width 100%




</style>