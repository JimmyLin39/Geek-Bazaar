const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  // get all messages from current user
  router.get('/:userId', (req, res) => {
    res.send({
      messages: 'success',
    });
  });

  // create a new message
  router.post('/', (req, res) => {
    const { senderId, receiverId, content } = req.body;
    knex('messages')
      .insert({
        sender_id: senderId,
        receiver_id: receiverId,
        content,
      })
      .then(() => {
        res.send({
          messages: 'successfuly add a message',
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return router;
};
