const User = require('./users');
const Stats = require('./stats');

User.hasMany(Stats, {
    foreignKey: 'runner_id'
});

Stats.belongsTo(User, {
    foreignKey: 'runner_id'
});

module.exports = { User, Stats };