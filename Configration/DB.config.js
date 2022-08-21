const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sqlweek6", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
