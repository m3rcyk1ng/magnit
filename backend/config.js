require('dotenv').config();

const {
  NODE_ENV,
  JWT = 'some-secret-key',
  DATA_BASE = 'mongodb://localhost:27017/magnitdb',
  PORT,
} = process.env;

module.exports = {
  JWT: NODE_ENV === 'production' ? JWT : 'some-secret-key',
  DATA_BASE: NODE_ENV === 'production' ? DATA_BASE : 'mongodb://localhost:27017/magnitdb',
  PORT: NODE_ENV === 'production' ? PORT : 3001,
};
