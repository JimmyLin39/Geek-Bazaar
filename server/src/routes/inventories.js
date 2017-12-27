const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  // retrieve all inventories
  router.get('/', (req, res) => {
    // if (!req.session.user_id) {
    //   res.redirect('/users');
    // }
    knex('inventories')
      .select()
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
    const { userId, name, description, condition, price } = req.body;
    knex('inventories')
      .insert({
        user_id: userId,
        name,
        description,
        condition,
        price,
      })
      .then(() => {
        knex('inventories')
          .select()
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

  router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const { userId, name, description, condition, price } = req.body;
    knex('inventories')
      .where('inventories.id', id)
      .update({
        user_id: userId,
        name,
        description,
        condition,
        price,
      })
      .then(() => {
        knex('inventories')
          .where('inventories.id', id)
          .select()
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

  router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    knex('inventories')
      .where('inventories.id', id)
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

