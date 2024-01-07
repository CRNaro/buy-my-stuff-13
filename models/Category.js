// Importing the 'Model' class and 'DataTypes' object from Sequelize.  Model is a class from which
// all models inherit, and DataTypes is an object that contains all possible data types that
// a model property can have. -->
const { Model, DataTypes } = require("sequelize");
// Importing the 'sequelize' connection instance from config/connection.js.
// This will be used to connect to the database.  -->
const sequelize = require("../config/connection.js");
//  Declaring a new call 'Category' that extends the 'Model' class from Sequelize.
//  This means that 'Category' inherits all the functionality of a Sequelize model.m -->
class Category extends Model {}
// Initializing('init') the 'Category' model by passing two objects as arguments.
// The first argument is an object that should define the columns of the 'category' table.
// The second argument  is an object that defines the model option; sequelize, timestamps, etc.
Category.init(
  {
    // TODO* define columns
    // looks like the following:
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    id: {},
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);
// Export model 'Category' for use in other parts of the application.
module.exports = Category;
