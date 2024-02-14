const sequelize = require('../config/connection');
const Running = require('../models/running');
const runningData = require('./running-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Running.bulkCreate(runningData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();