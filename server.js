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
const urlPrefix = '/api/v1';
const path = require('path');

app.set('port', process.env.PORT || 3000); // proces.env.PORT || 3000
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

/* let distDir = __dirname + "/dist/";
app.use(express.static(distDir)); */


if (process.env.NODE_ENV == 'production'){
  // server it through nginx
}else if (process.env.NODE_ENV == 'semi_production'){
  // semi-production (without nginx)
  app.use(express.static(path.join(__dirname, './frontend/dist/')));
}else{
  // dev mode
  // express will not use static files. So you will have to turn on angular
}

// Create the main entry point
app.get(urlPrefix + '/', (req, res) => {
  res.json({ message: 'API Rest MyCoach V1.0' });
});

// User routes
app.use(urlPrefix, require('./app/routes/user.routes'));
// Routine route
app.use(urlPrefix, require('./app/routes/routine.routes'));
// Exercise route
app.use(urlPrefix, require('./app/routes/exercise.routes'));

// if there is no match with the api url
/*app.get('*', (req, res) =>{
  return res.sendFile(path.join(__dirname, './frontend/dist/index.html'));
});*/

app.listen(app.get('port'), () => {
  console.log('Server running on port: ', app.get('port'));
});
