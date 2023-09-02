const Sequelize = require("sequelize");

const sequelize = new Sequelize("proyectDB", "postgres", "Esteban2212", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
