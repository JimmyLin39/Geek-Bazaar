// Talk to DB, which is one file-level up.
require('dotenv').config({path: '../.env'});

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

app.use(cors());
app.use(morgan('dev')); // see docs

app.use(knexLogger(knex));
app.use(bodyParser.json());

// TODO: Create a users profile
app.get('/users', (req, res) => {
  res.send({
    message: 'Welcome to the Users-Profile page'
  })
})

require('./routes')(app);

app.listen(process.env.PORT || 8081);
