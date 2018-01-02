const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  // retrieve all orders
  router.get('/', (req, res) => {
    // if (!req.session.user_id) {
    //   res.redirect('/users');
    // }
    knex('orders')
      .join('inventories', 'seller_id', 'inventories.id')
      .select('orders.id', 'inventories.name', 'inventories.price', 'buyer_id', 'seller_id', 'total_cents', 'status', 'date_of_agreement')
    // FIXME: update to the current userID
      .where('buyer_id', 1)
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
