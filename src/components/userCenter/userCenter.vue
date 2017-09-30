<template>
  <div>
    <a href="javascript;;" @click="goback">返回</a>
    <h1>用户中心</h1>
    <p>用户名：{{user.username}}</p>
    <p>手机号：{{user.mobile}}</p>
    <a href="javascript:;" @click="quit">退出</a>
  </div>
</template>

<script>
export default {
  props: {
    showFooter: Function,
    hideLoading: Function
  },
  data () {
    return {
      user: {}
    }
  },
  created () {
    this.showFooter(true);
    let user = JSON.parse(sessionStorage.getItem('user') || "{}");
    if (user.username) {
      this.user = user;
    } else {
      this.$router.push({ path: '/login' });
    }
  },
  mounted () {
    this.hideLoading();
  },
  methods: {
    goback () {
      history.back();
    },
    quit () {
      sessionStorage.removeItem('user');
      this.$router.push({ path: '/login' });
    }
  }
}
</script>

<style scoped>

</style>