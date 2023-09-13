const router = require("express").Router();
const shopController = require("../controllers/shopdetail.controller");

router.post("/", shopController.addShop);

router.get("/", shopController.getShop);

module.exports = router;
