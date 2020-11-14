const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../config/database').getConection()
class Post extends Model {}
Post.init({
  text: DataTypes.STRING
}, { sequelize, modelName: 'post',schema:"posts" });
module.exports = Post

