const sequelize = require('../config/connection');
const { User, Team, Project } = require('../models');

const userData = require('./user.json');
const projectData = require('./projects.json');
const teamsData = require('./teams.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const project of projectData) {
        await Project.create({
            ...Project,
            team_id: team[Math.floor(Math.random() 
                * team.length)].id,
        })
        process.exit(0);
    }
}
seedDatabase()