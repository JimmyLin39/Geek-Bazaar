const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  // retrieve all sales
  router.get('/:id', (req, res) => {
    knex('orders')
      .join('inventories', 'inventory_id', 'inventories.id')
      .join('users', 'orders.buyer_id', 'users.id')
      .select('orders.id', 'orders.created_at', 'inventories.name', { buyer: 'users.full_name' }, 'total_cents', 'status', 'date_of_agreement', 'image_url', 'image_name')
      .where('seller_id', req.params.id)
      .orderBy('orders.id', 'desc')
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
