const mongoose = require("mongoose");
const app = require("./app");
const dbConfig = require("./config/dbconfig");
const config = require("./config/config");
const PORT = 8082;
let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
mongoose
  .connect(dbConfig.mongoose.url, dbConfig.mongoose.options)
  .then(() => {
    console.log("Connected to Mongodb");
    server = app.listen(config.port, () => {
      console.log("listing to port", config.port);
    });
  })
  .catch();
