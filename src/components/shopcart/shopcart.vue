<template>
  <div>
    <header class="header">
      <a href="javascript:void(0)" class="goback" @click="goback"></a>
      <span class="carttitle">购物车</span>
      <span class="pullright"></span>
    </header>
    <div class="cartbox">
      <span class="cart_ico"></span>
      <div class="emptip">购物车是空的</div>
      <div class="empa">
        <a href="javascript:;">去逛逛</a>
        <a href="javascript:;">我的收藏</a>
      </div>
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
    this.showFooter(false);
  },
  mounted () {
    this.hideLoading();
  },
  methods: {
    goback () {
      history.back();
    }
  }
}
</script>

<style scoped lang='stylus'>
.header
  position relative
  padding 0 10px
  height 50px
  line-height 50px
  border-bottom 1px solid #f3f3f3
  color #333
  .goback
    display block
    position absolute
    width 22px
    height 20px
    margin-top 16px
    background url('./personal-bico1.png') no-repeat
    background-size 9px 17px
  .carttitle
    display block
    width 90%
    margin 0 auto
    text-align center
    font-size 18px
  .pullright
    display block
    position absolute
    top 0
    right 1em
    width 20px
    height 20px
    margin-top 14px
    background url('./imgtk-new.png') no-repeat
    background-size 20px 20px
.cartbox
  .cart_ico
    display block
    margin 50px auto 20px
    width 100px
    height 100px
    background url('./cart-ico.png') no-repeat
    background-position 0 -160px
    background-size 105px auto
  .emptip
    color #dbdbdb
    font-size 16px
    text-align center
  .empa
    margin-top 1.5em
    text-align center
    & > a
      display inline-block
      border-radius 5px
      border 1px solid #999
      height 40px
      line-height 40px
      width 100px
      color #999
      text-align center

</style>