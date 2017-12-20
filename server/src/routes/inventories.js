const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  // retrieve all inventories
  router.get('/', (req, res) => {
    // if (!req.session.user_id) {
    //   res.redirect('/users');
    // }
    // knex('inventories')
    //   .where('likes.user_id', req.session.user_id)
    //   .then((resources) => {
    //     return Promise.all([
    //       resources,
    //       knex('tags')
    //         .where('resource_id', 'in', resources.map(r => r.resource_id))
    //     ]);
    //   }).then(([resources, tags]) => {
    //     resources.forEach(resource => {
    //       resource.tags = tags.filter(tag => {
    //       return tag.resource_id === resource.resource_id;
    //       })
    //     })
    //     res.render('index', { resources })
    //   })
    res.send({
      message: 'success',
    });
  });

  return router;
};

