const server = require("../src/app");
const project = require("../src/models/Project");
const task = require("../src/models/Task");

require("dotenv").config();
const sequelize = require("../src/database/database");
const port = process.env.PORT;

const main = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    server.listen(port, () => {
      console.log(`use port ${port}`);
    });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
