const express = require('express');
const sharp = require('sharp');
const multer = require('multer');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = (knex) => {

  // dest: `${__dirname}/../public/uploads`
  // Upload product image and assign it to product, declare before product update
  // so it gets dibs on the route matching
  router.put('/upload', upload.single('inventory_image'), (req, res) => {
    const inventoryId = req.body.inventory_id;
    const filename = inventoryId + Date.now();

    sharp(req.file.buffer)
      .resize(400, 400)
      .crop(sharp.strategy.entropy)
      .toFile(`${__dirname}/../../public/uploads/${filename}`, (err) => {
        if (err) {
          console.error('woops', err);
        }
      });
    setTimeout(() => {
      knex('inventories')
      .where('inventories.id', inventoryId)
      .update({
        image_url: `http://localhost:8081/uploads/${filename}`,
        image_name: req.file.originalname
      })
      .then(() => {
        res.status(201);
        res.send({
          message: req.file.originalname,
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }, 2000);
  });


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

  // retrieve one inventory
  router.get('/:id', (req, res) => {
    // if (!req.session.user_id) {
    //   res.redirect('/users');
    // }
    const id = Number(req.params.id);
    knex('inventories')
      .select()
      .where('inventories.id', id)
      .then((resources) => {
        res.send({
          resources,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });

  // Create a new inventory 
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
      // send back inserted inventory
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

  // Update an inventory
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
      // send back updated inventory
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

  // delete an inventory
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

