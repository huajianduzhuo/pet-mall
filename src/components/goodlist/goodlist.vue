<template>
  <div>
    <app-down-load :appDownShow="appDownShow" :showAppDownLoad="showAppDownLoad"></app-down-load>
    <header class="header">
      <a href="javascript:void(0)" class="goback" @click="goback"></a>
      <span class="carttitle">商品列表</span>
      <span class="pullright"></span>
    </header>
    <div class="goodListBox" :class="{'top51': !appDownShow}">
      <div class="searchBox">
        <p>
          <a href="javascript:;">
            <input type="text" placeholder="点击搜索商品" disabled>
          </a>
        </p>
      </div>
      <div class="options">
        <ul class="optiontop">
        </ul>
        <ul class="option"></ul>
      </div>
      <div class="goods">
        <scroller>
          <ul>
            <li>
              <div class="goodphoto">
                <a href="javascript:;">
                  <img class="bigphoto" src="https://img1.epetbar.com/2017-05/15/16/e71e9107afe4d2c1bfb4c7324dfa4fdc.jpg@!300w-b" alt="">
                  <div class="country">
                    <img src="https://img2.epetbar.com/nowater/2016-08/12/16/143b7ea7399146885f19d11af44d5a27.jpg" alt="">
                  </div>
                </a>
              </div>
              <div class="gooddetail">
                <a href="javascript:;" class="goodtitle">
                  <h1>
                    <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt=""> 美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)
                  </h1>
                </a>
                <div class="mt30">
                  <span class="sum">¥138.00</span>
                  <span class="price">38.12元/斤</span>
                </div>
                <div class="sale">
                  <span>互动:23(100%好评)</span>
                  <span class="ml5">售出:26</span>
                </div>
                <div class="addcart">
                  <img src="./addcart.png" alt="">
                </div>
              </div>
            </li>
            <li>
              <div class="goodphoto">
                <a href="javascript:;">
                  <img class="bigphoto" src="https://img1.epetbar.com/2017-05/15/16/e71e9107afe4d2c1bfb4c7324dfa4fdc.jpg@!300w-b" alt="">
                  <div class="country">
                    <img src="https://img2.epetbar.com/nowater/2016-08/12/16/143b7ea7399146885f19d11af44d5a27.jpg" alt="">
                  </div>
                </a>
              </div>
              <div class="gooddetail">
                <a href="javascript:;" class="goodtitle">
                  <h1>
                    <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt=""> 美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)
                  </h1>
                </a>
                <div class="mt30">
                  <span class="sum">¥138.00</span>
                  <span class="price">38.12元/斤</span>
                </div>
                <div class="sale">
                  <span>互动:23(100%好评)</span>
                  <span class="ml5">售出:26</span>
                </div>
                <div class="addcart">
                  <img src="./addcart.png" alt="">
                </div>
              </div>
            </li>
            <li>
              <div class="goodphoto">
                <a href="javascript:;">
                  <img class="bigphoto" src="https://img1.epetbar.com/2017-05/15/16/e71e9107afe4d2c1bfb4c7324dfa4fdc.jpg@!300w-b" alt="">
                  <div class="country">
                    <img src="https://img2.epetbar.com/nowater/2016-08/12/16/143b7ea7399146885f19d11af44d5a27.jpg" alt="">
                  </div>
                </a>
              </div>
              <div class="gooddetail">
                <a href="javascript:;" class="goodtitle">
                  <h1>
                    <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt=""> 美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)
                  </h1>
                </a>
                <div class="mt30">
                  <span class="sum">¥138.00</span>
                  <span class="price">38.12元/斤</span>
                </div>
                <div class="sale">
                  <span>互动:23(100%好评)</span>
                  <span class="ml5">售出:26</span>
                </div>
                <div class="addcart">
                  <img src="./addcart.png" alt="">
                </div>
              </div>
            </li>
            <li>
              <div class="goodphoto">
                <a href="javascript:;">
                  <img class="bigphoto" src="https://img1.epetbar.com/2017-05/15/16/e71e9107afe4d2c1bfb4c7324dfa4fdc.jpg@!300w-b" alt="">
                  <div class="country">
                    <img src="https://img2.epetbar.com/nowater/2016-08/12/16/143b7ea7399146885f19d11af44d5a27.jpg" alt="">
                  </div>
                </a>
              </div>
              <div class="gooddetail">
                <a href="javascript:;" class="goodtitle">
                  <h1>
                    <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt=""> 美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)
                  </h1>
                </a>
                <div class="mt30">
                  <span class="sum">¥138.00</span>
                  <span class="price">38.12元/斤</span>
                </div>
                <div class="sale">
                  <span>互动:23(100%好评)</span>
                  <span class="ml5">售出:26</span>
                </div>
                <div class="addcart">
                  <img src="./addcart.png" alt="">
                </div>
              </div>
            </li>
            <li>
              <div class="goodphoto">
                <a href="javascript:;">
                  <img class="bigphoto" src="https://img1.epetbar.com/2017-05/15/16/e71e9107afe4d2c1bfb4c7324dfa4fdc.jpg@!300w-b" alt="">
                  <div class="country">
                    <img src="https://img2.epetbar.com/nowater/2016-08/12/16/143b7ea7399146885f19d11af44d5a27.jpg" alt="">
                  </div>
                </a>
              </div>
              <div class="gooddetail">
                <a href="javascript:;" class="goodtitle">
                  <h1>
                    <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt=""> 美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)
                  </h1>
                </a>
                <div class="mt30">
                  <span class="sum">¥138.00</span>
                  <span class="price">38.12元/斤</span>
                </div>
                <div class="sale">
                  <span>互动:23(100%好评)</span>
                  <span class="ml5">售出:26</span>
                </div>
                <div class="addcart">
                  <img src="./addcart.png" alt="">
                </div>
              </div>
            </li>
            <li>
              <div class="goodphoto">
                <a href="javascript:;">
                  <img class="bigphoto" src="https://img1.epetbar.com/2017-05/15/16/e71e9107afe4d2c1bfb4c7324dfa4fdc.jpg@!300w-b" alt="">
                  <div class="country">
                    <img src="https://img2.epetbar.com/nowater/2016-08/12/16/143b7ea7399146885f19d11af44d5a27.jpg" alt="">
                  </div>
                </a>
              </div>
              <div class="gooddetail">
                <a href="javascript:;" class="goodtitle">
                  <h1>
                    <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt=""> 美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)
                  </h1>
                </a>
                <div class="mt30">
                  <span class="sum">¥138.00</span>
                  <span class="price">38.12元/斤</span>
                </div>
                <div class="sale">
                  <span>互动:23(100%好评)</span>
                  <span class="ml5">售出:26</span>
                </div>
                <div class="addcart">
                  <img src="./addcart.png" alt="">
                </div>
              </div>
            </li>
            <li>
              <div class="goodphoto">
                <a href="javascript:;">
                  <img class="bigphoto" src="https://img1.epetbar.com/2017-05/15/16/e71e9107afe4d2c1bfb4c7324dfa4fdc.jpg@!300w-b" alt="">
                  <div class="country">
                    <img src="https://img2.epetbar.com/nowater/2016-08/12/16/143b7ea7399146885f19d11af44d5a27.jpg" alt="">
                  </div>
                </a>
              </div>
              <div class="gooddetail">
                <a href="javascript:;" class="goodtitle">
                  <h1>
                    <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt=""> 美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)
                  </h1>
                </a>
                <div class="mt30">
                  <span class="sum">¥138.00</span>
                  <span class="price">38.12元/斤</span>
                </div>
                <div class="sale">
                  <span>互动:23(100%好评)</span>
                  <span class="ml5">售出:26</span>
                </div>
                <div class="addcart">
                  <img src="./addcart.png" alt="">
                </div>
              </div>
            </li>
          </ul>
        </scroller>
      </div>
    </div>
  </div>
</template>

<script>
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
  created () {
    this.showFooter(false);
  },
  mounted () {
    this.hideLoading();
  },
  methods: {
    showAppDownLoad () {
      this.appDownShow = false;
    },
    goback () {
      history.back();
    }
  },
  components: {
    appDownLoad
  }
}
</script>

<style scoped lang='stylus'>
@import "../../common/stylus/mixins.styl"
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
.goodListBox
  position absolute
  top 106px
  bottom 0
  width 100%
  display flex
  flex-direction column
  &.top51
    top 51px
  .searchBox
    padding 10px
    border-1px(#e7e7e7)
    p
      background #f6f6f6
      padding 0 10px
      height 40px
      border-radius 5px
      a
        display block
        padding-left 20px
        background url('./search-ico.png') no-repeat
        background-size 14px 14px
        background-position 5px 13px
        input 
          background transparent
          height 40px
          line-height 40px
          width 90%
          text-indent 5px
          font-size 14px
  .goods
    flex 1
    position relative
    ul
      li
        padding 10px
        position relative
        display flex
        border-1px(#e7e7e7)
        .goodphoto
          width 100px
          height 100px
          flex 0 0 100px
          a
            display block
            position relative
            .bigphoto 
              width 100%
              height 100%
            .country 
              position absolute
              top 0
              left 0
              width 25px
              height 25px
              border-radius 50%
              border 1px solid #d7d7d7
              overflow hidden
              img 
                width 100%
                height 100%
        .gooddetail
          flex 1
          position relative
          .goodtitle
            color #333333
            display block
            h1
              font-size 12px
              height 32px
              line-height 16px
              overflow hidden
              img 
                height 17px
                margin-right 3px
                margin-top -4px
          .mt30
            margin-top 30px
            .sum
              font-size 14px
              color red
            .price
              font-size 12px
              color #999999
              margin-left 10px
          .sale
            color #999999
            font-size 12px
            .ml5
              margin-left 5px
          .addcart
            position absolute
            right 0
            bottom 0
            width 30px
            img 
              width 100%



</style>