const User = require('./User');
const Google = require('./google');
const Stats = require('./Stats');

User.hasMany(Stats, {
    foreignKey: 'runner_id'
});

Stats.belongsTo(User, {
    foreignKey: 'runner_id'
});

Google.hasMany(Stats, {
    foreignKey: 'googleId'
});

Stats.belongsTo(Google, {
    foreignKey: 'googleId'
});

module.exports = { User, Google, Stats };