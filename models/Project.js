// required files
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Project extends Model {}

// contains data for projects
Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    startup: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    max_developers: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "Project",
  }
);

module.exports = Project;
