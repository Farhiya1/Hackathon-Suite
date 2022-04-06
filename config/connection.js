// Using sequelize
const Sequelize = require("sequelize");

//Use .env file for use of data
require("dotenv").config();

// create connection to db using jawsdb on heroku or locally
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USERNAME,
      process.env.DB_PW,
      {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
      }
    );

// Exporting sequelize
module.exports = sequelize;
