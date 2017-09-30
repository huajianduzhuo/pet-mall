var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/epet', {
  useMongoClient: true
});

mongoose.connection.once('open', function (err) {
  if (!err) {
    console.log('mongodb数据库已连接');
  } else {
    console.log(err);
  }
});
