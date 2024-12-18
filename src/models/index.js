const fs = require('fs');
const path = require('path');
const sequelize = require('../config/database');

const models = {};
fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.js') && file !== 'index.js' && file !== 'associations.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    models[model.name] = model;
  });

require('./associations')(models);

models.sequelize = sequelize;
models.Sequelize = sequelize.Sequelize;

module.exports = models;
