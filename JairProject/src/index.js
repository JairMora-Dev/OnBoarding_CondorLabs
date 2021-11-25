const express = require('express');
const mongoSettings = require('./database/mongoCLabs');

require('dotenv').config('../.env');

const app = express();
const PORT = 3000;

app.use(express.json());

mongoSettings
  .getClient()
  .then(() => console.log('>> Db MongoCLabs is connect'))
  .catch((err) => {
    console.log('--- Db connection error ---');
    console.log(err);
  });

const userRoutes = require('./routes/user.routes');

app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Listen this personal project in PORT ${PORT}`);
});
