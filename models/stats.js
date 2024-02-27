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
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
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
    runner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    google_id: {
      type: DataTypes.STRING,
      references: {
        model: 'Google',
        key: 'googleId',
      },
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'stats',
  }
);

module.exports = Stats;
