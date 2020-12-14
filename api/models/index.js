'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

const db = {};
const Database = require('../../config/database');

Database.connect()

let sequelize = Database.getConection()
fs
  .readdirSync(path.resolve('api/models'))
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    console.log(path.resolve('api/models'))
    const model = require(path.join(path.resolve('api/models'), file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

console.log(db)
db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
