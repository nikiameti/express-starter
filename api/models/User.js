const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../config/database').getConection()
class User extends Model {}
User.init({
    id: DataTypes.UUID,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    nickname: DataTypes.STRING,
    birthday: DataTypes.DATE,
    passowrd: DataTypes.STRING
}, { sequelize, modelName: 'user',schema:"users" });
module.exports = User

