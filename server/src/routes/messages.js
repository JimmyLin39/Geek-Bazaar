const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  // get all messages from current user
  router.get('/:userId', (req, res) => {
    knex('messages')
      .join('users', 'messages.sender_id', 'users.id')
      .where('receiver_id', req.params.userId)
      .select('messages.sender_id', 'users.full_name as sender_name', 'content', 'messages.created_at')
      .orderBy('messages.created_at', 'desc')
      .then((result) => {
        res.send({
          result,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });

  // get all messages between specific sender and current user
  router.get('/:userId/detail/:senderId', (req, res) => {
    knex('messages')
      .join('users', 'messages.sender_id', 'users.id')
      .where(function() {
        this.where({
          receiver_id: req.params.userId,
          sender_id: req.params.senderId,
        }).orWhere({
          receiver_id: req.params.senderId,
          sender_id: req.params.userId,
        });
      })
      .select('messages.sender_id', 'users.full_name as sender_name', 'content', 'messages.created_at')
      .orderBy('messages.created_at', 'asc')
      .then((result) => {
        res.send({
          result,
        });
      })
      .catch((error) => {
        console.error(error);
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
        knex('messages')
          .join('users', 'messages.sender_id', 'users.id')
          .where({
            receiver_id: receiverId,
            sender_id: senderId,
          })
          .select('messages.sender_id', 'users.full_name as sender_name', 'content', 'messages.created_at')
          .orderBy('messages.created_at', 'desc')
          .limit(1)
          .then((result) => {
            res.send({
              result,
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

  return router;
};
