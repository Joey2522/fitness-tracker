const sequelize = require('../config/connection');
const Stats = require('../models/stats');
const runningData = require('./statsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Stats.bulkCreate(runningData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();