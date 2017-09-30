import Vue from 'vue'
import VueScroller from 'vue-scroller'
import { Swipe, SwipeItem } from 'mint-ui'
import router from './router'
import './mock/mockServer.js'
import app from './app.vue'
import '../static/reset.css'
import '../static/index.css'
import './common/stylus/ming-ui-reset.styl'

Vue.use(VueScroller);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
  router
});
