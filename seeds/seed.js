const sequelize = require('../config/connection');
const { User, Google, Stats } = require('../models/');

const userData = require('./userData.json');
const googleData = require('./googleData.json')
const runningData = require('./statsData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Google.bulkCreate(googleData, {
    individualHooks: true,
    returning: true,
  });

  await Stats.bulkCreate(runningData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();