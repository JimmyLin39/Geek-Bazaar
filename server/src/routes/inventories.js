const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  // retrieve all inventories
  router.get('/', (req, res) => {
    // if (!req.session.user_id) {
    //   res.redirect('/users');
    // }
    knex
      .select('name', 'description', 'price')
      .from('inventories')
      // .select()
      // .from('inventories')
      .then((resources) => {
        console.log('resources:', resources);
        res.send({
          message: 'success',
          resources,
        });
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log(knex.select().from('inventories'));
    // res.send({ message: 'success' });
  });

  return router;
};

