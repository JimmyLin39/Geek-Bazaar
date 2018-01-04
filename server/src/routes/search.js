const express = require('express');

const router = express.Router();

module.exports = (knex) => {
// search inventory by name
  router.get('/', (req, res) => {
    const { name } = req.query;
    knex('inventories')
      .select()
      .where(knex.raw('LOWER(inventories.name) LIKE ?', `%${name.toLowerCase()}%`))
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
