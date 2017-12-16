const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors);
app.use(morgan('combine')); // see docs
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  res.send({
    message: 'Hello!. You\'ve successfully registered!',
  });
});

app.listen(process.env.PORT || 8081, () => {
  console.log('we are up at on port ', process.env.PORT || 8081);
});
