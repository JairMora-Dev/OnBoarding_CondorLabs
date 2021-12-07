const express = require('express');
const mongoSettings = require('./database/mongoDBSettings');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerOptions = require('./utils/swaggerConf');

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
const profRoutes = require('./routes/professional.routes');
const orderRoutes = require('./routes/order.routes');
const swaggerSpecs = swaggerJsDoc(swaggerOptions);

app.use('/condorhealtcare', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
app.use('/', userRoutes);
app.use('/', profRoutes);
app.use('/', orderRoutes);

app.listen(PORT, () => {
  console.log(`Listen this personal project in PORT ${PORT}`);
});

module.exports = app;
