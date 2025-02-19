const sequelize = require("../config/database");
const Todo = require("./todo.model");

const db = {};
db.sequelize = sequelize;
db.Todo = Todo;

// Sync Database
(async () => {
  try {
    await sequelize.sync({ alter: true }); // Set { force: true } to reset DB
    console.log("Database connected and synced!");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
})();

module.exports = db;
