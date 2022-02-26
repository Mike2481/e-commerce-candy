// import Model to extend off of and bring in DataTypes for column definitions
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection.js');
// Initialize Category model (table) by extending off Sequelize's Model class
class Category extends Model {}
// class
Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true, // keep from making plural
    underscored: true,
    modelName: 'category', // assigns name for use in other files
  }
);

module.exports = Category;
