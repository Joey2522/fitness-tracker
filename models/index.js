const User = require('./Users');
const Stats = require('./Stats');

User.hasMany(Stats, {
    foreignKey: 'runner_id'
});

Stats.belongsTo(User, {
    foreignKey: 'runner_id'
});

module.exports = { User, Stats };