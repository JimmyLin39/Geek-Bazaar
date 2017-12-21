const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  // retrieve all inventories
  router.get('/', (req, res) => {
    // if (!req.session.user_id) {
    //   res.redirect('/users');
    // }
    knex('inventories')
      .join('products', 'inventories.product_id', '=', 'products.id')
      .select('inventories.name', 'inventories.description', 'inventories.price', 'image')
      .then((resources) => {
        res.send({
          resources,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return router;
};

