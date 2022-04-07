const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Project extends Model {}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
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
        end_date:{
            type: DataTypes.DATE,
           allowNull: false,
        },
        team_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'team',
                key: 'id',
            },
        startup_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'startup',
                key: 'id'
            }
        }
        },
    },
     {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'Project'
        }


)

module.exports = Project;

