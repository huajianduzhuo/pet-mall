<template>
  <div class="switchAddress">
    <header class="header">
      <a href="javascript:void(0)" class="goback" @click="goback"></a>
      <span class="carttitle">选择收货地区</span>
      <span class="pullright"></span>
    </header>
    <div class="switchpettype">
      <router-link to="/main/index/cat" :class="{'activetype': pettype === 'cat'}">
        <span>猫猫站</span>
      </router-link>
      <router-link to="/main/index/dog" :class="{'activetype': pettype === 'dog'}">
        <span>狗狗站</span>
      </router-link>
      <router-link to="/main/index/fish" :class="{'activetype': pettype === 'fish'}">
        <span>水族站</span>
      </router-link>
    </div>
    <div class="addressbox">
      <div class="defadd">
        当前默认地址：北京 西城区
      </div>
      <div class="selectAddress">
        <scroller>
          <ul v-if="proId === 0">
            <li v-for="(pro, index) in provinces" :key="index" @click="selectProvince(pro.code)">
              {{pro.name}}
            </li>
          </ul>
          <ul v-if="proId !== 0 && cityId === 0">
            <li v-for="(city, index) in cities" :key="index" @click="selectCity(city.code)">
              {{city.name}}
            </li>
          </ul>
          <ul v-if="proId !== 0 && cityId !== 0">
            <li v-for="(area, index) in areas" :key="index">
              <router-link :to="`/main/index/${pettype}`">{{area.name}}</router-link>
            </li>
          </ul>
        </scroller>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    hideLoading: Function
  },
  data () {
    return {
      pettype: 'dog',
      provinces: [],
      cities: [],
      areas: [],
      proId: 0,
      cityId: 0
    }
  },
  mounted () {
    axios.get('/getProvince')
      .then(response => {
        let result = response.data;
        if (result.code === 0) {
          this.provinces = result.provinces;
          this.$nextTick(() => {
            this.hideLoading();
          })
        }
      });
  },
  methods: {
    goback () {
      history.back();
    },
    selectProvince (proId) {
      this.proId = proId;
      axios.get('/getCities/' + proId)
        .then(response => {
          let result = response.data;
          if (result.code === 0) {
            this.cities = result.cities;
          }
        });
    },
    selectCity (cityId) {
      this.cityId = cityId;
      axios.get('/getAreas/' + this.proId + '/' + cityId)
        .then(response => {
          let result = response.data;
          if (result.code === 0) {
            this.areas = result.areas;
          }
        });
    }
  }
}
</script>

<style scoped lang='stylus'>
.switchAddress
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background #ffffff
  z-index 200
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
      margin-top 17px
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
      right 10px
      width 20px
      height 20px
      margin-top 14px
      background url('./imgtk-new.png') no-repeat
      background-size 20px 20px
  .switchpettype
    padding 10px
    background #F5F5F5
    overflow hidden
    .activetype
      span
        background red
        color white
    a
      display block
      width 33%
      float left
      span 
        display block
        margin 0 10px
        padding 5px
        background #b9b9b9
        color #666666
        border-radius 5px
        font-size 15px
        text-align center
  .addressbox
    .defadd
      background #ffe6d9
      border-bottom 1px solid #e7e7ee
      padding 10px
      font-size 14px
    .selectAddress
      position absolute
      top 148px
      bottom 0px
      overflow hidden
      width 100%
      ul
        li
          border-bottom 1px solid #e7e7e7
          padding 10px
          font-size 13px
        a
          display block



</style>