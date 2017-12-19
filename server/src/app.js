require('dotenv').config({path: '../.env'});

const ENV = process.env.ENV || 'development';
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const knexLogger = require('knex-logger');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('dev')); // see docs

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));
app.use(bodyParser.json());

app.get('/register', (req, res) => {
  res.send({
    message: 'Hello!. You\'ve successfully registered!',
  });
});

const bgg = require('bgg-axios');

bgg.search('monopoly', 20)
  .then((resultsId) => {
    const id = resultsId.items[0].objectid;
    // console.log(resultsId);
    bgg.apiRequest('thing items', { id: `${id}` })
      .then((results) => {
        console.log(results);
      });
  });

app.listen(process.env.PORT || 8081, () => {
  console.log('we are up at on port ', process.env.PORT || 8081);
});
