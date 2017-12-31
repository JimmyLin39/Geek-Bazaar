const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  // retrieve all cart items
  router.get('/', (req, res) => {
    // if (!req.session.user_id) {
    //   res.redirect('/users');
    // }
    knex('line_items')
      .join('inventories', 'inventory_id', 'inventories.id')
      .select('inventories.id', 'inventories.name', 'inventories.price')
       // FIXME: update to the current userID
      .where('line_items.user_id', 1)
      .then((resources) => {
        resources.forEach((element) => {
          element.quantity = 1;
        })
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
          resources: req.body,
        });
      })
      .catch((error) => {
        console.error(error);
      });

  });

  // delete an item from cart
  router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    knex('line_items')
      .where('inventory_id', id)
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

  return router;
};