const express = require("express");
const router = express.Router();

// Router for Authentication- register and login
const authRoute = require("./auth.routes");
router.use("/auth", authRoute);

// Route for user
const userRoute = require("./user.route");
router.use("/user", userRoute);

// Route for Category
const categoryRoute = require("./category.route");
router.use("/category", categoryRoute);

// Route for Product
const productRoute = require("./product.route");
router.use("/product", productRoute);
module.exports = router;
