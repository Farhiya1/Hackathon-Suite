const User = require("./User");
const Project = require("./Project");
const Team = require("./Team");

User.belongsToMany(Project, {
  through: {
    model: Team,
    unique: false,
  },
  as: "projects",
});

Project.belongsToMany(User, {
  through: {
    model: Team,
    unique: false,

  },
  as: "members",
});

Team.belongsTo(Project, {
  foreignKey: 'project_id'
})

Project.hasOne(Team, {
  foreignKey: 'project_id'
})

// Project.hasOne(Team, {
//   foreignKey: 'project_id'
// })

module.exports = { Project, User, Team };
