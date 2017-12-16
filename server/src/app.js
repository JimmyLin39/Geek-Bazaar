const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('combine')); // see docs
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.end('Hello World');
});

app.listen(process.env.PORT || 8080, () => {
  console.log('we are up at on port ', process.env.PORT || 8080);
});
