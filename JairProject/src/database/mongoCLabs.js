require('dotenv').config('../../.env');
const { USER_MONGODB, PASSWORD_MONGODB } = process.env;

const mongoDbSettings = {
  connectionName: 'connection_mongo_1',
  host: 'cluster0-shard-00-00.jwkmu.mongodb.net:27017, cluster0-shard-00-01.jwkmu.mongodb.net:27017, cluster0-shard-00-02.jwkmu.mongodb.net:27017',
  port: 27017,
  database: 'PPCondoLabs',
  user: USER_MONGODB,
  password: PASSWORD_MONGODB,
  ssl: true,
  authSource: 'admin',
};

const mongoSettings = require('@condor-labs/mongodb')(mongoDbSettings);

module.exports = mongoSettings;
