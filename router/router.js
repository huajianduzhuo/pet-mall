var express = require('express')
var sha1 = require('sha1')
var router = express.Router()
var Captchpng = require('captchapng')
var SmsUtil = require('../util/sms_util.js')
var UserModel = require('../model/userModel.js')

/**
 * 获取验证码图片
 * session中保存
 *  验证码：verifyCode
 *  验证码存入时间：verifyCodeTime
 */
router.get('/getCaptcha', function (req, res) {
  var verifyCode = parseInt(Math.random() * 9000 + 1000);
  req.session.verifyCode = verifyCode + '';
  req.session.verifyCodeTime = Date.now();
  var captch = new Captchpng(85, 30, verifyCode);
  captch.color(255, parseInt(Math.random() * 256), 0, 255);
  captch.color(0, parseInt(Math.random() * 256), 255, 255);
  var img = captch.getBase64();
  // var imgbase64 = new Buffer(img, 'base64');
  // res.set('Content-Type', 'image/png');
  res.send(img);
});

/**
 * 发送短信验证码
 * session中保存
 *  短信验证码：smsValidCode
 *  短信验证码存入时间：smsValidCodeTime
 */
router.post('/smsValid', function (req, res) {
  var mobile = req.body.mobile;
  var code = SmsUtil.randomCode(6);
  req.session.smsValidCode = code + '';
  req.session.smsValidCodeTime = Date.now();
  SmsUtil.sendCode(mobile, code, function (success) {
    if (success) {
      res.send({
        code: 1
      });
    } else {
      res.send({
        code: 0
      });
    }
  })
});

/**
 * 登录
 */
router.post('/login', function (req, res) {
  var loginmethod = req.body.loginmethod.trim();
  if (loginmethod === 'normal') {
    var loginUser = req.body.loginUser.trim();
    var password = req.body.password.trim();
    if (!loginUser || !password) {
      res.send({
        code: -1,
        err: '请输入用户名和密码'
      });
      return;
    }
    UserModel.find({
      $or: [{
        username: loginUser
      }, {
        mobile: loginUser
      }, {
        email: loginUser
      }]
    },
      function (err, docs) {
        if (!err) {
          if (docs && docs.length > 0) {
            var users = Array.prototype.slice.call(docs).filter(user => {
              return user.password === sha1(password);
            });
            if (users && users.length === 1) {
              req.session.user = users[0];
              res.send({
                code: 0,
                msg: '登录成功',
                user: users[0]
              });
              return;
            } else {
              res.send({
                code: -1,
                err: '用户名与密码不匹配'
              });
              return;
            }
          } else {
            res.send({
              code: -1,
              err: '用户信息不存在'
            });
            return;
          }
        } else {
          res.send({
            code: -1,
            err: '登录失败'
          });
          return;
        }
      })
  } else if (loginmethod === 'mobileactive') {
    // 动态密码登录
    var mobile = req.body.mobile.trim();
    var verifyCode = req.body.verifyCode.trim();
    var smsCode = req.body.smsCode.trim();
    if (!mobile || !verifyCode || !smsCode) {
      res.send({
        code: -1,
        err: '请输入绑定手机号、验证码以及动态密码'
      });
      return;
    }
    var sessionVerifyCode = req.session.verifyCode;
    var sessionVerifyCodeTime = req.session.verifyCodeTime;
    var sessionSmsValidCode = req.session.smsValidCode;
    var sessionSmsValidCodeTime = req.session.smsValidCodeTime;
    var now = Date.now();
    if (verifyCode !== sessionVerifyCode) {
      res.send({
        code: -1,
        err: '图片验证码错误'
      });
      return;
    } else if (now - sessionVerifyCodeTime >= 70000) {
      res.send({
        code: -1,
        err: '图片验证码失效，请重新获取'
      });
      return;
    }
    if (smsCode !== sessionSmsValidCode) {
      res.send({
        code: -1,
        err: '动态密码错误'
      });
      return;
    } else if (now - sessionSmsValidCodeTime >= 70000) {
      res.send({
        code: -1,
        err: '动态密码失效，请重新获取'
      });
      return;
    }
    UserModel.findOne({
      mobile: mobile
    }, function (err, doc) {
      if (!err) {
        if (doc && doc.username) {
          res.send({
            code: 0,
            msg: '登录成功',
            user: doc
          });
          return;
        } else {
          res.send({
            code: -1,
            err: '该手机号未注册'
          });
          return;
        }
      } else {
        res.send({
          code: -1,
          err: '登录失败'
        });
        return;
      }
    })
  }
});

router.post('/checkMobileExist', function (req, res) {
  var mobile = req.body.mobile.trim();
  if (mobile.length !== 11) {
    res.send({
      code: -1,
      msg: '手机号码应为11位'
    });
    return;
  }
  UserModel.find({
    mobile: mobile
  }, function (err, docs) {
    if (!err) {
      if (docs && docs.length > 0) {
        res.send({
          code: -1,
          msg: '该手机号已存在'
        });
        return;
      } else {
        res.send({
          code: 0,
          msg: '成功'
        });
        return;
      }
    } else {
      console.log(err);
      res.send({
        code: -2,
        msg: '校验失败'
      });
      return;
    }
  });
});

/**
 * 注册
 */
router.post('/register', function (req, res) {
  var mobile = req.body.mobile.trim();
  var verifyCode = req.body.verifycode.trim();
  var smsCode = req.body.smsCode.trim();
  var username = req.body.username.trim();
  var password = req.body.password.trim();
  var repwd = req.body.repwd.trim();

  if (mobile.length !== 11) {
    res.send({
      code: -1,
      msg: '手机号码应为11位'
    });
    return;
  }

  var nameReg = /^[a-zA-Z0-9_-]{4,20}$/;
  if (!nameReg.test(username)) {
    res.send({
      code: -1,
      msg: '用户名应为4-20位字母、数组、下划线的组合'
    });
    return;
  }

  var pwdReg = /^[a-zA-Z0-9]{8,20}$/;
  if (!pwdReg.test(password)) {
    res.send({
      cod: -1,
      msg: '应为8-20位字母或数字的密码'
    });
    return;
  }
  if (password !== repwd) {
    res.send({
      code: -1,
      msg: '两次输入密码不一致'
    });
    return;
  }

  var sessionVerifyCode = req.session.verifyCode;
  var sessionVerifyCodeTime = req.session.verifyCodeTime;
  var sessionSmsValidCode = req.session.smsValidCode;
  var sessionSmsValidCodeTime = req.session.smsValidCodeTime;
  var now = Date.now();
  if (verifyCode !== sessionVerifyCode) {
    res.send({
      code: -1,
      msg: '图片验证码错误'
    });
    return;
  } else if (now - sessionVerifyCodeTime >= 70000) {
    res.send({
      code: -1,
      msg: '图片验证码失效，请重新获取'
    });
    return;
  }
  if (smsCode !== sessionSmsValidCode) {
    res.send({
      code: -1,
      msg: '动态密码错误'
    });
    return;
  } else if (now - sessionSmsValidCodeTime >= 70000) {
    res.send({
      code: -1,
      msg: '动态密码失效，请重新获取'
    });
    return;
  }

  UserModel.create({
    mobile,
    username,
    password: sha1(password)
  }, function (err, user) {
    if (!err && user) {
      res.send({
        code: 0,
        msg: 'success'
      });
      return;
    } else {
      console.log(err);
      res.send({
        code: -2,
        msg: '注册失败'
      });
      return;
    }
  });
});

module.exports = router;
