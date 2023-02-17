const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class New extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsToMany(User, { through: 'Connect', foreignKey: 'news_id' });
    }
  }
  New.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.TEXT,
    },
    body: {
      type: DataTypes.TEXT,
    },
    author: {
      type: DataTypes.TEXT,
    },
    origin_url: {
      type: DataTypes.TEXT,
    },
    publishedAt: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'New',
  });
  return New;
};
