//const { query } = require('express');

const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// module.exports = {
//   up: queryInterface => {
//     return queryInterface.bulkInsert('Categories', categoryData, {
//       id: {
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//       type: Sequelize.INTEGER
//     },
//     category_name: {
//       type: Sequelize.STRING
//     },
//     createdAt: {
//       allowNull: false,
//       type: Sequelize.DATE
//     },
//     updatedAt: {
//       allowNull: false,
//       type: Sequelize.DATE
//     }
//     });
//   },
//   down: queryInterface => {
//     return queryInterface.bulkDelete('Categories', null, {});
//   }
// };

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
