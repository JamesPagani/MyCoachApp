// Create the main entry point
const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to DB');
}).catch(err => {
  console.log('Problems with the DB connection', err);
  process.exit();
});

app.get('/', (req, res) => {
  res.json({ message: 'API Rest MyCoach V1.0' });
});

// User routes
require('./app/routes/user.routes')(app);

app.listen(3000, () => {
  console.log('Server running');
});
