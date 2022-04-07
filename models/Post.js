const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

// Post class created to export
class Post extends Model {}

Post.init(
  {
    // title: DataTypes.STRING,
    body: DataTypes.STRING,
  },
  {
    sequelize,
  }
);

module.exports = Post;
