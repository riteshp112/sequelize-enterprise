const { Sequelize } = require('sequelize');
const config = require('./env/' + process.env.NODE_ENV);

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'postgres',
  logging: console.log, // Disable in production
});

module.exports = sequelize;
