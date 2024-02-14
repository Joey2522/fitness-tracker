const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stats extends Model {}

Stats.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    distance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duration: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      defaultValue: DataTypes.NOW,
      allowNull: false,
      },
    feeling: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'stats',
  }
);

module.exports = Stats;
