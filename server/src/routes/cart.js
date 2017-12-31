const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  // add an item to cart
  router.post('/', (req, res) => {
    const { id, price } = req.body;
    knex('line_items')
      .insert({
        inventory_id: id,
        item_price_cents: price,
      })
      .then(() => {
        res.send({
          resources: req.body,
        });
      })
      .catch((error) => {
        console.error(error);
      });

  });

  return router;
};