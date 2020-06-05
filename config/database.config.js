const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mycoach'

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