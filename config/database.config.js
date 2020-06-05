const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mycoach';
const URI2 = 'mongodb://MongoDev:MongoDev2020@localhost:27017/mycoach';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to DB');
}).catch(err => {
  console.log('Problems with the DB connection', err);
  process.exit();
});

module.exports = mongoose;