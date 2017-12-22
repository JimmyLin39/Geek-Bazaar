const ENV = process.env.ENV || 'development';
const bcrypt = require('bcrypt');
const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig[ENV]);
const knexLogger = require('knex-logger');

module.exports = {
  register (req, res) {
    const newUser = {
      full_name: req.body.full_name,
      display_name: req.body.display_name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
    }
    knex.insert(newUser)
      .into('users')
      .then(res.send({
          message: `Hello ${req.body.full_name}!
          You've successfully registered with the display name
          ${req.body.display_name}, and email ${req.body.email}`,
        })
      );
    // TODO: If email is already in DB --> email MUST be unique
    if (req.body.email === 'test@test.com') {
      console.log('Testing!'); // backend hitting this!
    }
    },
  login (req, res) {
      const user = {
        email: req.body.email,
        password: req.body.password
      }
  }
}
