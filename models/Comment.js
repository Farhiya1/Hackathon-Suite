const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Comment class created to export
class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Comment;
