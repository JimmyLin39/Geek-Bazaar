const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  // retrieve all orders
  router.get('/:id', (req, res) => {
    knex('orders')
      .join('inventories', 'inventory_id', 'inventories.id')
      .join('users', 'orders.seller_id', 'users.id')
      .select('orders.id', 'orders.created_at', 'inventories.name', { seller: 'users.full_name' }, 'total_cents', 'status', 'date_of_agreement', 'image_url', 'image_name')
      .where('buyer_id', req.params.id)
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

  // update order status
  router.put('/:id/status', (req, res) => {
    const id = Number(req.params.id);
    const { status } = req.body;

    knex('orders')
      .where('orders.id', id)
      .update({
        status,
      })
      .then(() => {
        res.send({
          message: 'successfuly update order status',
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });

  router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);

    knex('orders')
      .where('orders.id', id)
      .del()
      .then(() => {
        res.send({
          message: `successfully delete order ${id}`,
        });
      })
      .catch((error) => {
        console.error(error);
      });

  });

  return router;
};
