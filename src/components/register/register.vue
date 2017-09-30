<template>
  <div class="regwrap">
    <transition name="hide">
      <form v-show="mobileInputShow">
        <div class="mobile">
          <input type="number" placeholder="请输入手机号码" :maxlength="11" v-model="mobile">
        </div>
        <a href="javascript:;" class="next" :class="{'bgred': mobile.length === 11}" @click="showMobileInput">下一步</a>
      </form>
    </transition>
    <transition name="show">
      <form class="adduserinfo" v-show="addInfoShow">
        <div class="mobile">
          <input type="number" disabled :maxlength="11" v-model="mobile">
        </div>
        <div class="imgverify">
          <input type="text" placeholder="图片验证码" :maxlength="4" v-model="verifycode">
          <img ref="verifyImg" src="" alt="" @click="getCaptcha">
        </div>
        <div class="verify">
          <input type="number" placeholder="验证码" :maxlength="6" v-model="smsCode">
          <a href="javascript:;" v-show="sendSmsShow" @click="sendSmsValid">获取短信验证码</a>
          <a href="javascript:;" v-show="!sendSmsShow">{{daojishi}}s</a>
        </div>
        <div class="username">
          <input type="text" placeholder="您的昵称/用户名" v-model="username">
        </div>
        <div class="password">
          <input type="password" placeholder="请设置密码" v-model="password">
        </div>
        <div class="password">
          <input type="password" placeholder="请确认密码" v-model="repwd">
        </div>
        <a href="javascript:;" class="next" :class="{'bgred': fullFilled}" @click="register">下一步</a>
      </form>
    </transition>
  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui'
import axios from 'axios'
export default {
  props: {
    showFooter: Function,
    hideLoading: Function
  },
  data () {
    return {
      mobileInputShow: true,
      addInfoShow: false,
      mobile: '',
      verifycode: '',
      smsCode: '',
      username: '',
      password: '',
      repwd: '',
      sendSmsShow: true,
      daojishi: 60
    }
  },
  computed: {
    fullFilled () {
      return this.mobile && this.verifycode && this.smsCode && this.username && this.password && this.repwd;
    }
  },
  created () {
    this.showFooter(false);
  },
  mounted () {
    this.hideLoading();
  },
  methods: {
    showMobileInput () {
      let mobile = this.mobile.trim();
      if (mobile.length === 11) {
        let params = new URLSearchParams();
        params.append('mobile', mobile);
        axios.post('/epet/checkMobileExist', params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(response => {
            let res = response.data;
            if (res.code === 0) {
              this.mobileInputShow = false;
              this.addInfoShow = true;
              this.$nextTick(() => {
                this.getCaptcha();
              })
            } else {
              MessageBox.alert(res.msg, '');
              return false;
            }
          })
      }
    },
    getCaptcha () {
      axios({
        method: 'get',
        url: '/epet/getCaptcha',
        responseType: 'stream'
      })
        .then(response => {
          this.$refs.verifyImg.src = 'data:image/png;base64,' + response.data;
        })
    },
    sendSmsValid () {
      var params = new URLSearchParams();
      params.append('mobile', '13373011225');
      axios.post('/epet/smsValid', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => {
          let res = response.data;
          if (res.code === 1) {
            Toast({
              message: '发送成功',
              position: 'top',
              duration: 1000
            });
            this.sendSmsShow = false;
            this.r = setInterval(() => {
              this.daojishi--;
              if (this.daojishi === 0) {
                clearInterval(this.r);
                this.sendSmsShow = true;
                this.$nextTick(() => {
                  this.daojishi = 60;
                })
              }
            }, 1000);
          } else {
            Toast({
              message: '发送验证码失败',
              position: 'top',
              duration: 1000
            });
          }
        })
    },
    register () {
      let mobile = this.mobile.trim();
      let verifycode = this.verifycode.trim();
      let smsCode = this.smsCode.trim();
      let username = this.username.trim();
      let password = this.password.trim();
      let repwd = this.repwd.trim();
      if (!mobile) {
        MessageBox.alert('绑定手机号不能为空', '');
        return false;
      }
      let nameReg = /^[a-zA-Z0-9_-]{4,20}$/;
      if (!nameReg.test(username)) {
        MessageBox.alert('用户名应为4-20位字母、数组、下划线的组合', '');
        return false;
      }
      if (!verifycode || !smsCode || !password || !repwd) {
        return false;
      }
      let pwdReg = /^[a-zA-Z0-9]{8,20}$/;
      if (!pwdReg.test(password)) {
        MessageBox.alert('应为8-20位字母或数字的密码', '');
        return false;
      }
      if (password !== repwd) {
        MessageBox.alert('两次输入密码不一致', '');
        return false;
      }
      // 请求服务器
      let params = new URLSearchParams();
      params.append('mobile', mobile);
      params.append('verifycode', verifycode);
      params.append('smsCode', smsCode);
      params.append('username', username);
      params.append('password', password);
      params.append('repwd', repwd);
      axios.post('/epet/register', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => {
          let res = response.data;
          if (res.code === 0) {
            Toast({
              message: '注册成功',
              position: 'top',
              duration: 1000
            });
            this.$router.push({ path: '/login' });
          } else {
            MessageBox.alert(res.msg, '');
            return false;
          }
        });
    }
  }
}
</script>

<style scoped lang='stylus'>
.regwrap
  form
    position absolute
    top 0
    width 100%
    padding-left 10px
    div
      position relative
      border-bottom 1px solid #e2e2e2
      padding 12px 0 12px 30px
      background-size 17px 17px
      background-repeat no-repeat
      background-position 5px 16px
      input
        width 57%
        font-size 12px
        color #666666
        font-family "Microsoft Yahei",tahoma,arial
        height 21px
        outline none 
        background #ffffff
    .next
      display block
      margin 35px 10%
      background #d7d7d7
      color #ffffff
      border-radius 30px
      font-size 15px
      text-align center
      padding 5px 0
      &.bgred
        background #f03131
    .mobile
      background-size 10px 18px
      background-image url('./ico1.png') 
      background-position 8px 16px
    .imgverify
      background-image url('./ico5.png') 
      background-size 16px 16px
      img
        position absolute
        right 20px
    .verify
      background-image url('./ico2.png') 
      background-size 16px 16px
      a
        display block
        position absolute
        right 15px
        top 0.7em
        width 9em
        background #fed171
        border-radius 30px
        text-align center
        font-size 14px
        color #ffffff
        padding 0.3em 0
    .username
      background-image url('./ico3.png') 
    .password
      background-image url('./ico4.png') 
  .adduserinfo
    z-index 2
    background #ffffff
    div
      input 
        color #b8b8b8
        font-size 13px 
  .hide-leave-active
    transform-origin 0 0
    transition .5s
  .hide-leave-to
    transform scale(0)
  .show-enter-active
    transition .5s
  .show-enter
    transform translateY(40px)
  

</style>