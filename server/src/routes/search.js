const express = require('express');

const router = express.Router();

module.exports = (knex) => {
// search inventory by name
  router.get('/', (req, res) => {
    const { name } = req.query;
    knex('inventories')
      .select()
      .where('inventories.name', name)
      .then((response) => {
        res.send({
          resources: response,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return router;
};
