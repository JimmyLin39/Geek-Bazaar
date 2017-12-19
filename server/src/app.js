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

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}!  You've successfully registered!`,
  });
});

const bgg = require('bgg-axios');

app.get('/search', (req, res) => {
  console.log('req body: ', req.query.search);
  bgg.search(`${req.query.search}`, 2)
    .then((searchResults) => {
      return Promise.all(searchResults.items.map((item) => {
        return bgg.apiRequest('thing items', { id: `${item.objectid}` });
      }));
    })
    .then((allResults) => {
      res.send({
        message: 'success',
        allResults,
      });
    });
});

app.listen(process.env.PORT || 8081, () => {
  console.log('we are up at on port ', process.env.PORT || 8081);
});
