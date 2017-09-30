<template>
  <div class="root">
    <router-view :showFooter="showFooter" :hideLoading='hideLoading'></router-view>
    <epet-footer :footerShow="footerShow"></epet-footer>
    <div class="loading" v-if="loading"></div>
  </div>
</template>

<script>
import footer from './components/footer/footer.vue'
export default {
  data () {
    return {
      footerShow: true,
      loading: true
    }
  },
  methods: {
    showFooter (isShow) {
      this.footerShow = isShow;
    },
    hideLoading (show) {
      this.loading = show || false;
    }
  },
  watch: {
    $route: {
      deep: true,
      handler () {
        this.loading = true;
      }
    }
  },
  components: {
    'epet-footer': footer
  }
}
</script>

<style scoped lang='stylus'>
.root
  width 100%
  height 100%
  margin 0 auto
</style>