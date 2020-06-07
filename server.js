/*
  start API with:
  npm run dev
*/
const express = require('express');
// const bodyParser = require('body-parser');

const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./config/database.config');

app.set('port', process.env.PORT || 3000); // proces.env.PORT || 3000
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

/* let distDir = __dirname + "/dist/";
app.use(express.static(distDir)); */

// Create the main entry point
app.get('/', (req, res) => {
  res.json({ message: 'API Rest MyCoach V1.0' });
});

// User routes
app.use('/api/v1/', require('./app/routes/user.routes'));
app.use('/api/v1/', require('./app/routes/routine.routes'));
app.use('/api/v1/', require('./app/routes/exercise.routes'));

app.listen(app.get('port'), () => {
  console.log('Server running on port: ', app.get('port'));
});
