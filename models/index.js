const User = require('./users');
const Google = require('./google');
const Stats = require('./stats');

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