<template>
  <div class="sort">
    <div class="sortleft">
      <scroller>
        <ul>
          <li v-for="(category, index) in categories" :key="index" :class="{'cr': curIndex===category.cateid}" @click="switchSort(category.cateid)">
            <a href="javascript:;">{{category.name}}</a>
          </li>
        </ul>
      </scroller>
    </div>
    <div class="sortright">
      <scroller>
        <div class="sortdetaillist">
          <div v-for="(cate, index) in cateList" :key="index">
            <div class="recom sortrecom" v-if="cate.type === 0">
              <a href="javascript:;" class="recomtitle">
                {{cate.title}}
                <img :src="cate.rigth_img.image" alt="">
              </a>
              <ul>
                <li v-for="(item, index) in cate.list" :key="index">
                  <router-link to="/goodlist">
                    <img :src="item.photo" alt="">
                    <p>{{item.name}}</p>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="recom hotrecom"  v-if="cate.type === 2">
              <a href="javascript:;" class="recomtitle">
                {{cate.title}}
                <img :src="cate.rigth_img.image" alt="">
              </a>
              <ul>
                <li v-for="(item, index) in cate.list" :key="index">
                  <a href="javascript:;">
                    <div class="imgbor">
                      <img :src="item.logo" alt="">
                    </div>
                    <p>{{item.name}}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </scroller>
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
      curIndex: 0,
      sort: {},
      categories: [],
      cateList: []
    }
  },
  mounted () {
    axios.get('/getCategories')
      .then(response => {
        let result = response.data;
        if (result.code === 'succeed') {
          this.categories = result.categorys;
          this.curIndex = this.categories[0].cateid;
          this.cateList = this.categories[0].cate_list;
          this.$nextTick(() => {
            this.hideLoading();
          });
        };
      })
  },
  methods: {
    switchSort (index) {
      this.curIndex = index;
      this.hideLoading(true);
      let cateLists = this.categories.filter((cate) => {
        return cate.cateid === index;
      });
      if (cateLists.length > 0) {
        this.cateList = cateLists[0].cate_list;
        this.$nextTick(() => {
          this.hideLoading();
        });
      }
    }
  }
}
</script>

<style scoped lang='stylus'>
.sort
  width 100%
  height 100%
  overflow hidden
  position relative
  background #F3F4F5
  .sortleft
    position relative
    height 100%
    float left
    overflow hidden
    width 70px
    ul
      li
        width 70px
        padding 15px 0
        text-align center
        font-size 13px
        border-bottom 1px solid #f3f4f5
        background #ffffff
      .cr
        background #f3f4f5
        a
          color #ed4044
  .sortright
    position absolute
    top 5px
    bottom 0
    left 75px
    right 0
    background #ffffff
    .sortdetaillist
      .recom
        padding 15px 5px 20px
        border-top 1px solid #f3f4f5
        .recomtitle
          display block
          font-size 12px
          color #999999
          margin-top 10px
          padding-left 5px
          img 
            height 10px
            float right 
            vertical-align middle
            margin-top 5px
      .sortrecom
        ul
          overflow hidden
          li
            float left
            width 33.33%
            a
              display block
              padding 10px 5px 0
              text-align center
              img 
                width 100%
              p
                margin-top 10px
                font-size 12px
                color #333333
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
      .hotrecom
        ul
          overflow hidden
          li
            float left
            width 50%
            margin-top 10px
            a
              display block
              padding 0 5px
              .imgbor
                width 100%
                border 1px solid #f3f4f5
                text-align center
              img 
                height 45px
                max-width 100%
                margin-top 10px
              p
                margin-top 10px
                font-size 12px
                color #333333
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
                text-align center


</style>