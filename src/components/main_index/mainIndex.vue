<template>
  <div>
    <swipe :imgList="bannerList"></swipe>
    <div class="swiper-container">
      <a href="javascript:;">
        <img src="https://img2.epetbar.com/nowater/2017-07/03/8/747562c921cd37cf0dafbe24ccfe62bd.gif" alt="">
      </a>
    </div>
    <div class="columnnavdiv">
      <ul class="hottype" v-if="homeData.classMenu">
        <li v-for="(menu, index) in homeData.classMenu.menus" :key="index">
          <a href="">
            <img :src="menu.image" lazy="loaded">
          </a>
        </li>
      </ul>
    </div>
    <div class="page_line"></div>
    <div class="surprise_day" v-if="homeData.surprise">
      <div class="surprise_title">
        <div class="fl surimg">
          <img :src="homeData.surprise.surprise_icon.image" alt="">
        </div>
        <div class="fl mt1 ml10 fs13">距离下一场</div>
        <div class="fl surprise_time">{{time}}</div>
        <div class="fl daojishi">
          <span class="br1">{{hour}}</span>
          <span>:</span>
          <span class="br1">{{minute}}</span>
          <span>:</span>
          <span class="br1">{{second}}</span>
        </div>
        <div class="more">
          <a href="https://wap.epet.com/surprise/Main.html?fw=0" class="db ftr">
            <img :src="homeData.surprise.right_image.image">
          </a>
        </div>
      </div>
      <div class="suprise_goods" ref="surprise">
        <ul>
          <li v-for="(good, index) in goods" :key="index">
            <a href="javascript:;">
              <img :src="good.image.image" alt="">
              <p class="now_price">￥{{good.sale_price}}</p>
              <p class="save_price">{{good.little_price}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="page_line"></div>
    <div class="currency_ad" v-if="homeData.hotList">
      <div class="cur_title">
        <a href="javascript:;">
          <img :src="homeData.hotList.center_image.image" alt="">
        </a>
      </div>
      <div class="cur_box">
        <div class="cur_left">
          <a href="javascript:;">
            <img src="https://img2.epetbar.com/nowater/2017-09/21/09/03f51eb78add57a87f2619517758cbf4.jpg@!water" alt="">
          </a>
        </div>
        <div class="cur_right">
          <a href="javascript:;">
            <img src="https://img2.epetbar.com/nowater/2017-09/21/09/042df360a733282ab3544ce261e0a75d.jpg@!water" alt="">
          </a>
          <a href="javascript:;">
            <img src="https://img2.epetbar.com/nowater/2017-09/21/10/fcb76da8467e018d480207720f0bd74a.jpg@!water" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="page_line"></div>
    <div class="popvideo" v-if="homeData.hotVideo">
      <customTitle :imgUrl="homeData.hotVideo.center.img.image"></customTitle>
      <div class="fashion">
        <a href="https://wap.epet.com/article/video/View.html?vid=50&fw=0">
          <div class="video_box">
            <img :src="homeData.hotVideo.value[0].cover.image" alt="">
            <span class="play_btn"></span>
          </div>
          <div class="video_intro">
            <div class="intro">{{homeData.hotVideo.value[0].title}}</div>
            <div>
              <span class="video_ico"></span>
              <i>{{homeData.hotVideo.value[0].visit}}</i>
              <span class="ge">|</span>
              {{homeData.hotVideo.value[0].time}}
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="page_line"></div>
    <div class="experience">
      <custom-title img-url="https://img2.epetbar.com/nowater/2017-04/19/18/9cfe1253127a6fa47de6e711e216d1ee.png"></custom-title>
      <a href="javascript:;">
        <img src="https://img2.epetbar.com/nowater/2017-09/14/09/3862fcd9c0004d91a81ad63a494b82a0.jpg@!water" alt="">
      </a>
    </div>
    <div class="page_line"></div>
    <div class="brand" v-if="homeData.brandsSpePrice">
      <custom-title :img-url="homeData.brandsSpePrice.center.img.image"></custom-title>
      <div class="singleBrand" v-for="(brand, index) in brands" :key="index">
        <div class="brandTop">
          <span class="brandTitle">{{brand.title}}</span>
          <span class="brandActive">{{brand.sub_title}}</span>
        </div>
        <a href="javascript:;">
          <img :src="brand.content_images[0].image" alt="">
        </a>
      </div>
    </div>
    <div class="page_line"></div>
    <div class="ta_welfare" v-if="homeData.taPublic">
      <div class="wel_title">
        <div class="center">
          <a href="javascript:;">
            <img src="https://img2.epetbar.com/nowater/2016-12/02/12/617e8ae8c72da60d562a30170c26c118.jpg" alt="">
          </a>
        </div>
        <div class="more">
          <a href="javascript:;">
            <img src="https://img2.epetbar.com/nowater/2016-12/02/16/0d2acd3b4d742a510dfa0142d493e145.png" alt="">
          </a>
        </div>
      </div>
      <div class="ta_bg">
        <img src="https://img2.epetbar.com/nowater/2016-12/02/12/20c6bcc947e062dae210b391e2fa6a98.jpg" alt="">
        <div class="ta_info">
          <p>
            截止今日，TA公益已联合E宠商城和
            <span class="bgw">15</span>
            家品牌
          </p>
          <p>
            累积捐赠
            <span class="cr">857,272.44</span>
            元
          </p>
          <p>
            已合作
            <span class="m5">7</span>
            家公益组织，举办参与
            <span class="bgw">2</span>
            场公益活动,助养
            <span class="bgw">34</span>
            位领养人
          </p>
        </div>
      </div>
      <div class="ta_brands">
        <div class="ta_left">
          <img src="https://img2.epetbar.com/nowater/2016-12/02/12/c31f5c121481db47aaf92f04d6be2d6e.png" alt="">
        </div>
        <div class="ta_right" ref="ta_brand">
          <ul>
            <li v-for="(item, index) in homeData.taPublic.list" :key="index">
              <a href="javascript:;">
                <div class="brandImg">
                  <img :src="item.logo.image" alt="">
                </div>
                <p class="helpmoney">{{item.donate_money_txt}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="page_line"></div>
    <div class="comment_wrap" v-if="homeData.ratings">
      <div class="comment_title">
        <div class="center">
          <a href="javascript:;">
            <img src="https://img2.epetbar.com/nowater/2017-01/13/20/a1225213b3d2bc9067676102e629bf1e.png" alt="">
          </a>
        </div>
        <div class="good_comm">
          <a href="javascript:;">
            好评率99.64%
          </a>
        </div>
      </div>
      <ul class="comments">
        <li v-for="(item, index) in homeData.ratings.list" :key="index">
          <a href="javascript:;">
            <div>
              <div class="user_img">
                <img :src="item.main_image.image" alt="">
                <p class="jointime">{{item.join_time}}</p>
              </div>
              <p class="user_info">
                <span class="username">{{item.username}}</span>
                <span class="petkind">{{item.pet_des}}</span>
              </p>
              <p class="comm_info">
                {{item.comment_content}}
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="page_line"></div>
    <indexFooter></indexFooter>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import swipe from '../swipe/swipe.vue'
import customTitle from '../customTitle/customTitle.vue'
import indexFooter from '../main_index_footer/mainIndexFooter.vue'
export default {
  props: {
    hideLoading: Function
  },
  data () {
    return {
      homeData: {},
      bannerList: [],
      time: 0,
      hour: '23',
      minute: '59',
      second: '59',
      goods: [],
      brands: []
    }
  },
  mounted () {
    axios.get('/homeData')
      .then(response => {
        this.homeData = response.data;
        this.bannerList = this.homeData.bannerImg.value;
        this.goods = this.homeData.surprise.goods;
        this.brands = this.homeData.brandsSpePrice.brands;
        this.time = this.homeData.surprise.time;
        this.r = setInterval(() => {
          let distime = this.time - Date.now();
          if (distime <= 0) {
            clearInterval(this.r);
          }
          if (distime === 0) {
            this.hour = '00';
            this.minute = '00';
            this.second = '00';
          } else {
            let hour = parseInt(distime / 1000 / 60 / 60);
            let minute = parseInt((distime - hour * 60 * 60 * 1000) / 1000 / 60);
            let second = parseInt((distime - hour * 60 * 60 * 1000 - minute * 60 * 1000) / 1000);
            this.hour = hour >= 10 ? hour : '0' + hour;
            this.minute = minute >= 10 ? minute : '0' + minute;
            this.second = second >= 10 ? second : '0' + second;
          }
        }, 1000);
        this.$nextTick(() => {
          /* eslint-disable no-new */
          new BScroll(this.$refs.surprise, {
            scrollX: true,
            scrollY: false,
            click: true
          });
          new BScroll(this.$refs.ta_brand, {
            scrollX: true,
            scrollY: false,
            click: true
          });
          this.hideLoading();
        })
      })
  },
  watch: {
    $route (to, from) {

    }
  },
  components: {
    swipe,
    customTitle,
    indexFooter
  }
}
</script>

<style scoped lang='stylus'>
.swiper-container
  width 100%
  a
    display block
    width 100%
    img 
      width 100%
.columnnavdiv
  .hottype
    display flex
    flex-flow  row wrap
    padding 10px 0
    li
      width 25%
      a
        display block
        img 
          width 100%
.surprise_day
  .surprise_title
    position relative
    padding 10px
    overflow hidden
    .fl
      float left
    .fs13
      font-size 13px
    .mt1
      margin-top 1px
    .ml10
      margin-left 10px
    .surimg
      overflow hidden
      img 
        height 24px
        margin-left -24px
    .surprise_time
      display none
    .daojishi
      margin-left 5px
      text-align center
      font-size 12px
      .br1
        display inline-block
        border 1px solid #dddddd
        padding 1px 2px
    .more
      position absolute
      top 2px
      right 0
      a
        float right 
        text-align right 
        img 
          width 50%
  .suprise_goods
    box-sizing border-box
    width 100%
    padding-left 5px
    margin-bottom 10px
    overflow hidden
    ul
      white-space nowrap
      float left
      li
        width 100px
        margin-right 10px
        display inline-block
        a
          display block
          padding 0 7px
          text-align center
          img 
            width 100%
          .now_price
            color red
            margin-top 5px
          .save_price
            color #999999
            font-size 12px
.currency_ad
  padding-top 10px
  .cur_title
    width 100%
    a
      img 
        width 100%
  .cur_box
    width 100%
    overflow hidden
    border-top 1px solid #e7e7ee
    .cur_left
      width 43%
      float left
      a
        display block
        width 100%
        img 
          width 100%
    .cur_right
      width 57%
      float left
      a
        display block
        width 100%
        img 
          width 100%
          border-bottom  1px solid #e7e7ee
.popvideo
  .fashion
    width 100%
    a
      display block
      width 100%
      .video_box
        position relative
        img 
          width 100%
        .play_btn
          position absolute
          top 50%
          left 50%
          width 20px
          height 20px
          margin-left -10px
          margin-top -10px
          background url('./play.png') no-repeat
          background-size contain
      .video_intro
        font-size 12px
        color #999
        padding 10px
        text-align center
        .intro
          color #333
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
        & > div
          .video_ico
            display inline-block
            width 10px
            height 9px
            background url('./view-black.png') no-repeat
            background-size contain
            margin-right 3px
          .ge
            margin 0 10px
.experience
  a
    display block
    width 100%
    img
      width 100%
.brand
  .singleBrand
    .brandTop
      padding 10px
      .brandTitle
        font-size 15px
      .brandActive
        font-size 12px 
        color #999
        margin-left 5px
    a
      display block
      width 100%
      img
        width 100%
.ta_welfare
  .wel_title
    position relative
    .center
      a
        display block
        width 100%
        img
          display block
          height 45px
          margin 0 auto
    .more
      position absolute
      top 10px
      right 5px
      a
        img
          width 75px
  .ta_bg
    position relative
    img
      width 100%
    .ta_info
      position absolute
      top 20%
      left 0
      width 100%
      p
        margin-top 5px
        color #ffffff
        font-size 14px
        font-weight 700
        text-align center
        .bgw
          display inline-block
          padding 0 5px
          background #ffffff
          border-radius 5px
          color red
          font-weight 400
          line-height 1.3
        .cr
          color red
        .m5
          margin 0 5px
  .ta_brands
    padding-left 10px
    .ta_left
      width 60px
      padding-top 10px
      float left
      img
        width 90%
        margin-top 10px
    .ta_right
      margin-left 75px
      border-left 1px solid #e7e7e7
      padding 5px 0 0 5px
      overflow hidden
      ul
        white-space nowrap
        float left
        li
          display inline-block
          width 110px
          margin-right 10px
          border-right 1px solid #e7e7e7
          a
            display block
            padding-right 10px
            .brandImg
              img
                width 100%
            .helpmoney
              width 100%
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
              margin-top 5px
              padding-top 3px
              border-top 1px solid #e7e7e7
              font-size 12px
.comment_wrap
  .comment_title
    position relative
    .center
      a
        display block
        width 100%
        img
          display block
          height 45px
          margin 0 auto
    .good_comm
      position absolute
      top 13px
      right 5px
      font-size 12px
      color #999
      background url('./index_icon_comment_sanjiao.png') no-repeat
      background-size 8px 9px
      background-position right
      padding-right 10px
  .comments
    padding-right 10px
    padding-bottom 10px
    overflow hidden
    li
      float left
      width 50%
      font-size 12px
      a
        display block
        margin-left 10px
        margin-top 10px
        padding-bottom 15px
        background #f5f5f5
        .user_img
          position relative
          height 150px
          overflow hidden
          img
            width 100%
          .jointime
            position absolute
            lefo 0
            bottom 0
            width 100%
            background rgba(0,0,0,.4)
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            text-align center
            color #ffffff
        .user_info
          padding 5px 5px 0 5px
          overflow hidden
          .username 
            float left
          .petkind
            float right
            background #ddd
            border-radius 5px
            padding 0 5px
        .comm_info
          height 60px
          overflow hidden
          color #999
          font-size 13px
          padding-left 5px
          padding-right 5px
          padding-top 5px

      


</style>