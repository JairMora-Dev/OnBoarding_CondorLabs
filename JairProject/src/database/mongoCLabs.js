require('dotenv').config('../../.env');
const { USER_MONGODB, PASSWORD_MONGODB, HOST1, HOST2, HOST3 } = process.env;

const mongoDbSettings = {
  connectionName: 'connection_mongo_1',
  host: `${HOST1}, ${HOST2}, ${HOST3}`,
  port: 27017,
  database: 'PPCondoLabs',
  user: USER_MONGODB,
  password: PASSWORD_MONGODB,
  ssl: true,
  authSource: 'admin',
};

const mongoSettings = require('@condor-labs/mongodb')(mongoDbSettings);

module.exports = mongoSettings;
