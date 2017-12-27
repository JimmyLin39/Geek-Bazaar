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
      .select('inventories.id', 'user_id', 'inventories.name', 'inventories.description', 'inventories.price', 'condition', 'image', 'thumbnail')
      .then((resources) => {
        res.send({
          resources,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });

  router.post('/', (req, res) => {
    const { userId, productId, name, description, condition, price } = req.body;
    knex('inventories')
      .insert({
        user_id: userId,
        product_id: productId,
        name,
        description,
        condition,
        price,
      })
      .then(() => {
        knex('inventories')
          .join('products', 'inventories.product_id', '=', 'products.id')
          .select('inventories.id', 'user_id', 'inventories.name', 'inventories.description', 'inventories.price', 'condition', 'image', 'thumbnail')
          .orderBy('inventories.created_at', 'desc')
          .limit(1)
          .then((resources) => {
            res.send({
              resources,
            });
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return router;
};

