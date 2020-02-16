const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Artist extends Model {}
Artist.init({
  artistAddress: DataTypes.STRING,
  tokenAddress: DataTypes.DATE
}, { sequelize, modelName: 'artist' });