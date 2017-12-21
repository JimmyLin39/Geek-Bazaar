const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
// console.log(process.env.SESSION_SECRET);

const PORT = process.env.PORT || 8081;
const ENV = process.env.ENV || 'development';
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const knexLogger = require('knex-logger');
const cors = require('cors');

const app = express();

// Seperated Routes for each Resource
const inventoriesRoutes = require('./routes/inventories');

app.use(cors());
app.use(morgan('dev')); // see docs

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));
app.use(bodyParser.json());

// Mount all resource routes
app.use('/inventories', inventoriesRoutes(knex));

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}!  You've successfully registered!`,
  });
});

app.listen(PORT, () => {
  console.log('Geek-Bazzar Api listening on port ' + PORT);
});
