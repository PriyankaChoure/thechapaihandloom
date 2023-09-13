const httpStatus = require("http-status");
const shopDetailService = require("../services/shopdetail.service");

// method to add new Shop
const addShop = async (req, res) => {
  const shopDetail = {
    title: req.body.title,
    desc: req.body.desc,
    imageList: req.body.shopImages,
    videos: req.body.shopVideos,
  };
  console.log("shop details in controller - ", shopDetail);
  try {
    const newShop = await shopDetailService.addShopDetail(shopDetail);
    if (newShop) {
      res.status(httpStatus.CREATED).json(newShop);
    } else {
      res.status(httpStatus.BAD_REQUEST).json("Error while creating shop");
    }
  } catch (err) {
    console.log("error to create new shop -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};
// method to found Shop details
const getShop = async (req, res) => {
  try {
    console.log("in shop controller -");
    const shop = await shopDetailService.getShopDetail();
    console.log(shop.length);
    if (shop) {
      res.json(shop);
    } else {
      res.status(httpStatus.BAD_REQUEST).json("no product found");
    }
  } catch (err) {
    console.log("error to get shop list -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

module.exports = {
  addShop,
  getShop,
};
