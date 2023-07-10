const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const multer = require("multer");
const httpStatus = require("http-status");
const routes = require("./routes/");
const app = express();

// set security HTTP headers - https://helmetjs.github.io/
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "./public/images"));

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

// Reroute all API request starting with "/v1" route
app.use("/backend", routes);

// send back a 404 error for any unknown api request
// app.use((req, res, next) => {
//   next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
// });

// handle error
// app.use(errorHandler);

module.exports = app;
