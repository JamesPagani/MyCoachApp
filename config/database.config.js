const mongoose = require('mongoose');

const URI = 'mongodb+srv://mycoach-app:TcoCmcFeIXETV8z0@cluster0-qiams.mongodb.net/mycoach?retryWrites=true&w=majority'
//const URI = 'mongodb://mongo/mycoach';
//const URI = 'mongdb://localhost/mycoach';
//const URI = 'mongodb://MongoDev:MongoDev2020@localhost:27017/mycoach';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log('Connected to DB');
}).catch(err => {
  console.log('Problems with the DB connection', err);
  process.exit();
});

module.exports = mongoose;
