const sequelize = require("../config/connection");
const { User, Team, Project } = require("../models");

const userData = require("./user.json");
const projectData = require("./projects.json");
const teamsData = require("./teams.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
