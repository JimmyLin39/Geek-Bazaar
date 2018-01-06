const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  // retrieve all cart items
  router.get('/:id', (req, res) => {
    knex('line_items')
      .join('inventories', 'inventory_id', 'inventories.id')
      .select('inventories.id', 'inventories.name', 'inventories.price', 'inventories.user_id')
      .where('line_items.user_id', req.params.id)
      .then((resources) => {
        resources.forEach((element) => {
          element.quantity = 1;
        });
        res.send({
          resources,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });

  // add an item to cart
  router.post('/', (req, res) => {
    const inventory_id = req.body.inventory.id;
    const item_price_cents = req.body.inventory.price;
    const user_id = req.body.userId;
    knex('line_items')
      .insert({
        inventory_id,
        user_id,
        item_price_cents,
      })
      .then(() => {
        res.send({
          message: 'successfully add an item to cart',
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });

  // delete an item from cart
  router.delete('/:id/:userid', (req, res) => {
    const id = Number(req.params.id);
    const userid = Number(req.params.userid);
    knex('line_items')
      .where({
        inventory_id: id,
        user_id: userid,
      })
      .del()
      .then(() => {
        res.send({
          message: 'deleted!',
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });

  // create a new order to orders table
  router.post('/checkout', (req, res) => {
    const orders = req.body;
    const createOrdersPromise = new Promise((resolve, reject) => {
      orders.forEach((element) => {
        const { buyer_id, seller_id, inventory_id, total_cents, status, type } = element;
        knex('orders')
          .insert({ buyer_id, seller_id, inventory_id, total_cents, status, type })
          // delete cart item in line_items table
          .then(() => {
            knex('line_items')
              .where('user_id', buyer_id)
              .del()
              .catch((error) => {
                reject(error);
              });
            resolve('Success');
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
    createOrdersPromise.then(() => {
      res.send({
        message: 'successfully create orders',
      });
    });
  });
  return router;
};
