<template>
  <div class="mainContainer">
    <div class="main">
      <appDownLoad :appDownShow="appDownShow" :showAppDownLoad="showAppDownLoad"></appDownLoad>
      <div class="epet-search">
        <div class="location">
          <router-link to="/switch">
            <span class="pettype c89">狗狗站</span>
            <span class="c89">|</span>
            <span class="myplace">河北</span>
            <i></i>
          </router-link>
        </div>
        <p class="search-text">
          <a href="javascript:;">
            <input type="search" placeholder="搜索商品和品牌" disabled />
            <span class="search-ico"></span>
          </a>
        </p>
        <a href="javascript:;" class="chat">
          <img src="./mydope.png" alt="">
        </a>
      </div>
      <div class="main_nav">
        <ul>
          <li>
            <router-link to="/main/index" active-class="main_nav_active">
              <span class="rela">
                <span>首页</span>
                <i></i>
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/main/menu/1" active-class="main_nav_active">
              <span class="rela">
                <span>主粮</span>
                <i></i>
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/main/menu/2" active-class="main_nav_active">
              <span class="rela">
                <span>医疗保健</span>
                <i></i>
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/main/menu/3" active-class="main_nav_active">
              <span class="rela">
                <span>零食玩具</span>
                <i></i>
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/main/menu/4" active-class="main_nav_active">
              <span class="rela">
                <span>日用外出</span>
                <i></i>
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/main/menu/5" active-class="main_nav_active">
              <span class="rela">
                <span>美容香波</span>
                <i></i>
              </span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="moduleWrap">
        <scroller>
          <router-view :hideLoading="hideLoading"></router-view>
          <div class="fp"></div>
        </scroller>
      </div>
    </div>
    <div class="switchtype">
    </div>
    
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import appDownLoad from '../appDownload/appDownLoad.vue'
export default {
  props: {
    showFooter: Function,
    hideLoading: Function
  },
  data () {
    return {
      appDownShow: true
    }
  },
  mounted () {
    /* eslint-disable no-new */
    new BScroll('.main_nav', {
      scrollX: true,
      scrollY: false,
      click: true
    });
    this.hideLoading();
  },
  methods: {
    showAppDownLoad () {
      this.appDownShow = false;
    }
  },
  created () {
    this.showFooter(true);
  },
  components: {
    appDownLoad
  }
}
</script>

<style scoped lang='stylus'>
.mainContainer
  width 100%
  height 100%
  .main
    position relative
    width 100%
    height 100%
    display flex
    flex-direction column
    .epet-search
      padding 13px 10px
      display flex
      .location
        position relative
        float left
        margin-right 20px
        .c89
          color #898989
        .myplace
          font-size 13px
        i
          position: absolute;
          top: 10px;
          right: -11px;
          border-width: 4px;
          font-size: 0;
          line-height: 0;
          border-style: solid solid dotted;
          border-color: #898989 transparent transparent;
      .search-text
        position relative
        flex 1
        input 
          width 100%
          border 0
          height 25px
          background #e9e9e9
          border-radius 4px
          color #bcbcbc
          text-indent 10px
          font-size 13px
          outline 0
        .search-ico
          position absolute
          right 5px
          top 0
          bottom 0
          margin auto 0
          width 11px
          height 11px
          background url('./search.png') no-repeat
          background-position 0 0
          background-size 11px auto
      .chat
        display block
        float right 
        & > img 
          width 25px
          margin-left 10px
    .main_nav
      width 100%
      height 35px
      min-width 320px
      ul
        white-space nowrap
        float left
        li
          display inline-block
          width 74.667px
          a
            display block
            width 100%
            height 100%
            text-align center
            line-height 35px
            color #666
            font-size 14px
          .main_nav_active
            .rela
              position relative
              color #459d36
              display inline-block
              i 
                position absolute
                bottom 1px
                left -10%
                width 120%
                height 2px
                background #459d36
    
    .moduleWrap
      position relative
      overflow hidden
      flex 1
      .fp
        width 100%
        height 45px
  
  .switchtype
    position fixed
    width 41px
    height 46px
    bottom 15%
    right -1px
    z-index 2
    background url('./godog.png') no-repeat
    background-size 80px auto
    background-position 0 0
    animation dog 2.5s steps(2) infinite
  
      

@keyframes dog
  0%
    background-position 0px
  100%
    background-position -81px

</style>