/**
 * Created by yujin on 2017/7/23.
 */

var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  mobile: Number,
  email: String
});

var UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
