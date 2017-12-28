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
const bcrypt = require('bcrypt');

const app = express();

// Seperated Routes for each Resource
const inventoriesRoutes = require('./routes/inventories');

app.use(cors());
app.use(morgan('dev')); // see docs

app.use(knexLogger(knex));
app.use(bodyParser.json());

// Mount all resource routes
app.use('/inventories', inventoriesRoutes(knex));
app.use(express.static('public'));

app.post('/register', (req, res) => {
  const newUser = {
    full_name: req.body.full_name,
    display_name: req.body.display_name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  }
  knex.insert(newUser)
    .into('users')
    .then(res.send({
        message: `Hello ${req.body.full_name}!  You've successfully registered with the display name ${req.body.display_name}, and email ${req.body.email}`,
      })
    );
});

app.listen(PORT, () => {
  console.log('Geek-Bazzar Api listening on port ' + PORT);
});
