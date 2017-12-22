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
        description,
        condition,
        price,
      })
      .then(() => {
        res.send({
          mseeage: `userId: ${userId}, productId: ${productId} name: ${name}, description: ${description}, condition: ${condition}, price: ${price}`,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return router;
};

