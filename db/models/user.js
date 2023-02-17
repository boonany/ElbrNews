'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ New }) {
      this.belongsToMany(New, { through: 'Connect', foreignKey: 'user_id' });
    }
  }
  User.init({
    user_name: DataTypes.TEXT,
    password: DataTypes.TEXT,
    email: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};