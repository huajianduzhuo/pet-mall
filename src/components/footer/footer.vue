<template>
  <footer class="footer" v-if="footerShow">
    <router-link to="/main" class="main" active-class="mainActive"></router-link>
    <router-link to="/categories" class="categories" active-class="categoriesActive"></router-link>
    <router-link to="/shopcart" class="shopcart"></router-link>
    <router-link to="/userCenter" class="login"></router-link>
  </footer>
</template>

<script>
export default {
  props: {
    footerShow: Boolean
  }
}
</script>

<style scoped lang='stylus'>
.footer
  position fixed
  bottom 0
  left 0
  width 100%
  height 45px
  line-height 45px
  border-top 1px solid #e7e7e7
  display flex
  justify-content space-around
  z-index 100
  background #ffffff
  & > a
    width 25%
    height 100%
    background-position center 2px
    background-size auto 40px
    background-repeat no-repeat
  .main
    background-image url('./main_tab_1.png')
    &.mainActive
      background-image url('./main_cattab_1_sel.png')
  .categories
    background-image url('./main_tab_2.png')
    &.categoriesActive
      background-image url('./main_cattab_2_sel.png')
  .shopcart
    background-image url('./main_tab_3.png')
  .login
    background-image url('./main_tab_4.png')
    
</style>