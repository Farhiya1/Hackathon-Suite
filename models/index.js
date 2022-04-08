const User = require('./User')
const Project = require('./Project')
const Team = require('./Team')

User.belongsTo(Team, {
    foreignKey:'team_id',
    onDelete: 'CASCADE'
})



Team.hasMany(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'

})

Project.belongsTo(Team, {
    foreignKey: 'team_id',
    onDelete: 'CASCADE'
})

Team.hasOne(Project,{
    foreignKey: 'project_id',
    onDelete: 'CASCADE'
})



module.exports = {Project, User, Team}
