const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  // retrieve all orders
  router.get('/', (req, res) => {
    // if (!req.session.user_id) {
    //   res.redirect('/users');
    // }
    knex('orders')
      .join('inventories', 'inventory_id', 'inventories.id')
      .join('users', 'orders.seller_id', 'users.id')
      .select('orders.id', 'orders.created_at', 'inventories.name', { seller: 'users.full_name' }, 'total_cents', 'status', 'date_of_agreement', 'image_url', 'image_name')
    // FIXME: update to the current userID
      .where('buyer_id', 1)
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
