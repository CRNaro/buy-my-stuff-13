// Importing .env module and immediately calling the config() method.  This loads environment variables 
// from the .env file into the process.env variable in Node.js.
require('dotenv').config();
// Importing the Sequelize module, which is a promise-based Node.js ORM for Postgres, MySQL, MariaDB,
const Sequelize = require('sequelize');
// Declaring 'sequelize' and assigning it a value based on JAWSDB_URL environment variable.  If this variable
// exists, it means wear are in a production environment and will use JAWSDB URL to connect to database.  
// If JAWSDB_URL is not defined, a new Sequelize object is created using the the local db name user, pw 
// from environment variables.  The db hose is 'localhost' and the dialect is 'mysql', and the decimalNumbers
// is set to 'true' to allow precise decimals.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
// Export 'sequelize' instance so it can be imported and used in other parts of application. 
module.exports = sequelize;
