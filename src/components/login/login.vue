<template>
  <div class="loginWrap">
    <header>
      <div class="headtop">
        <a href="javascript:;" @click="goback" class="goback"></a>
        <router-link to="/register" class="reg">注册</router-link>
      </div>
      <div class="logo">
        <img src="./logo.png" alt="">
      </div>
      <div class="loginmethod">
        <ul>
          <li @click="switchLoginMethod('normal')">
            普通登录
            <i v-show="loginmethod === 'normal'"></i>
          </li>
          <li @click="switchLoginMethod('mobileactive')">
            手机动态密码登录
            <i v-show="loginmethod === 'mobileactive'"></i>
          </li>
        </ul>
      </div>
    </header>
    <div class="loginform">
      <div class="tabs">
        <div class="normal" v-show="loginmethod === 'normal'">
          <form>
            <div class="username">
              <input type="text" placeholder="手机号/邮箱/用户名" v-model="loginUser">
            </div>
            <div class="password">
              <input type="password" placeholder="输入密码" v-model="password">
            </div>
          </form>
        </div>
        <div class="mobileactive" v-show="loginmethod === 'mobileactive'">
          <form>
            <div class="mobile">
              <input type="number" placeholder="已注册的手机号" v-model="mobile">
            </div>
            <div class="verify">
              <input type="text" maxlength="4" placeholder="请输入图片内容" v-model="verifyCode">
              <span>
                <img ref="verifyImg" src="" alt="" @click="getCaptcha">
              </span>
            </div>
            <div class="acpwd">
              <input type="password" placeholder="动态密码" v-model="smsCode">
              <a href="javascript:;" v-show="sendSmsShow" @click="sendSmsValid">获取动态密码</a>
              <a href="javascript:;" v-show="!sendSmsShow">{{daojishi}}s</a>
            </div>
          </form>
        </div>
      </div>
      <p class="forgetpwd">
        <a href="javascript:;">忘记密码？</a>
      </p>
      <p class="loginbtn">
        <a href="javascript:;" @click="login">登录</a>
      </p>
      <p class="ad">
        APP专享:E宠团5折包邮,首单满99送99
        <a href="javascript:;">去下载</a>
      </p>
    </div>
    <div class="h100"></div>
    <div class="otherlogin">
      <p class="title">合作网站登录</p>
      <ul>
        <li>
          <a href="javascript:;">
            <img src="./login_ico4.png" alt="">
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="./login_ico2.png" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast, MessageBox } from 'mint-ui'
export default {
  props: {
    showFooter: Function,
    hideLoading: Function
  },
  data () {
    return {
      loginmethod: 'normal', // mobileactive
      loginUser: '',
      password: '',
      mobile: '',
      verifyCode: '',
      smsCode: '',
      sendSmsShow: true,
      daojishi: 60
    }
  },
  created () {
    this.showFooter(false);
  },
  mounted () {
    this.getCaptcha();
    this.hideLoading();
  },
  methods: {
    goback () {
      history.back();
    },
    switchLoginMethod (method) {
      this.loginmethod = method;
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
      let params = new URLSearchParams();
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
    login () {
      let loginmethod = this.loginmethod;
      if (loginmethod === 'normal') {
        // 普通登录
        let loginUser = this.loginUser.trim();
        let password = this.password.trim();
        if (!loginUser || !password) {
          MessageBox.alert('请填写用户名或密码', '');
          return false;
        }
        // 请求服务器
        let params = new URLSearchParams();
        params.append('loginmethod', loginmethod);
        params.append('loginUser', loginUser);
        params.append('password', password);
        axios.post('/epet/login', params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(response => {
            let res = response.data;
            if (res.code === 0) {
              let user = res.user;
              sessionStorage.setItem('user', JSON.stringify(user));
              Toast({
                message: '登录成功',
                position: 'top',
                duration: 1000
              });
              this.$router.push({ path: '/userCenter' });
            } else {
              MessageBox.alert(res.err, '');
              return false;
            }
          });
      } else if (loginmethod === 'mobileactive') {
        // 动态密码登录
        let mobile = this.mobile.trim();
        let verifyCode = this.verifyCode.trim();
        let smsCode = this.smsCode.trim();
        if (!mobile || !verifyCode || !smsCode) {
          MessageBox.alert('请输入绑定手机号、验证码以及动态密码', '');
          return false;
        }
        // 请求服务器
        let params = new URLSearchParams();
        params.append('loginmethod', loginmethod);
        params.append('mobile', mobile);
        params.append('verifyCode', verifyCode);
        params.append('smsCode', smsCode);
        axios.post('/epet/login', params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(response => {
            let res = response.data;
            if (res.code === 0) {
              let user = res.user;
              sessionStorage.setItem('user', JSON.stringify(user));
              Toast({
                message: '登录成功',
                position: 'top',
                duration: 1000
              });
              this.$router.push({ path: '/userCenter' });
            } else {
              MessageBox.alert(res.err, '');
              return false;
            }
          });
      }
    }
  }
}
</script>

<style scoped lang='stylus'>
.loginWrap
  header
    background url('./2ac7b0a4f0ab1e4a63819e0668d1cb39.png') no-repeat
    background-size 100% 100%
    .headtop
      height 50px
      position relative
      padding 0 1em
      .goback
        position absolute
        display block
        width 22px
        height 20px
        background url('./personal-bico3.png') no-repeat
        background-size 12px 17px
        top 16px
      .reg
        font-size 16px
        color #ffffff
        display block
        text-align right 
        line-height 50px
    .logo
      padding 10px 0 20px
      text-align center
      img 
        width 20%
    .loginmethod
      background-color rgba(255,255,255,0.3)
      ul
        overflow hidden
        li
          position relative
          float left
          width 50%
          font-size 15px
          color #ffffff
          height 44px
          line-height 44px
          text-align center
          i 
            position absolute
            bottom 0
            left 50%
            margin-left -5px
            display block
            width 0
            height 0
            border-left 10px solid transparent
            border-right 10px solid transparent
            border-bottom 10px solid #ffffff
  .loginform
    background white
    margin-top -1px
    .tabs
      padding 0 20px 10px
      & > div
        width 100%
        form
          & > div
            position relative
            border-bottom 1px solid #e2e2e2
            padding 12px 0 12px 30px
            background-size 17px 20px
            background-repeat no-repeat
            background-position 5px 14px
            input 
              font-size 15px
              color #666666
              font-family "Microsoft Yahei",tahoma,arial
              height 21px
              outline none 
      .normal
        form
          .username
            background-image url('./ico3.png') 
          .password
            background-image url('./ico4.png')
      .mobileactive
        form
          .mobile
            background-image url('./ico1.png') 
          .verify
            background-image url('./ico4.png')  
            span 
              display block
              position absolute
              top 5px
              right 0
          .acpwd
            background-image url('./ico4.png')   
            a 
              display block
              position absolute
              top 6px
              right 0
              padding 0.3em 0
              color #ff4259
              border 1px solid #eb4c33
              width 100px
              border-radius 3px
              text-align center
              font-size 12px
    .forgetpwd
      padding 0 20px
      text-align right 
      a      
        color #898989
    .loginbtn
      padding 0 20px
      margin-top 0.5em
      a
        display block
        background #2ec975
        border-radius 5px
        letter-spacing 15px
        text-align center
        color #ffffff
        font-size 15px
        padding 9px 0
    .ad
        margin-top 6px
        color #666666
        font-size 12px
        text-align center
        a
          color #0ca4ed
  .h100
    height 100px
  .otherlogin
    .title
      color #d7d7d7
      text-align center
      font-size 16px
    ul
      padding 1.5em 0
      overflow hidden
      li
        float left
        width 33.33%
        a
          display block
          padding 0 12px
          text-align center
          img 
            width 60%
            max-width 176px





</style>