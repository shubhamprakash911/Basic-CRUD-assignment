const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const sequelize = require("./config/database");
const todoRoutes = require("./routes/todo.routes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to MySQL Database!");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("Database connection error:", error));
