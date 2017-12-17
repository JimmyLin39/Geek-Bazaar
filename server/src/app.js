const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

app.get('/status', (req, res) => {
  res.send({
    message: 'Current Status: working!',
  });
});

app.post('/register', (req, res) => { // \n
  res.send({
    message: `Hello ${req.body.email}. You've successfully registered!`,
  });
});

app.listen(process.env.PORT || 8081, () => {
  console.log('we are up at on port ', process.env.PORT || 8081);
});
