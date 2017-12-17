const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config/config');
// Assume there's a models folder
const { sequelize } = require('./models');

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

require('./routes')(app);

sequeliz.sync()
  .then(() => {
    app.listen(config.port);
    console.log(`we are up at on port ${config.port}`);
  });
