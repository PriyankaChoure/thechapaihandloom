const Shop = require("../models/shopdetail.model");

// method to add new Product
const addShopDetail = async (shopDetail) => {
  const addedShopDetail = Shop.create(shopDetail);
  return addedShopDetail;
};

//method to get all Product list
const getShopDetail = async () => {
  const shopDetail = await Shop.find();
  console.log("in service - ", shopDetail);
  return shopDetail;
};

module.exports = {
  addShopDetail,
  getShopDetail,
};
