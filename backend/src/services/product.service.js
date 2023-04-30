const Product = require("../models/product.model");

// method to add new Product
const createProduct = async (productDetail) => {
  const addedProduct = Product.create(productDetail);
  return addedProduct;
};

// method to get Product detail by id
const getProductByID = async (id) => {
  const productDetails = await Product.findById(id);
  console.log("product in service - ", productDetails);
  return productDetails;
};

//method to get all Product list
const getAllProducts = async () => {
  const productList = await Product.find();
  return productList;
};

// method to update Product detail
const updateProductDetail = async (id, detail) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    { $set: detail },
    { new: true }
  );

  console.log(updatedProduct);
  return updatedProduct;
};

// method to delete Category by id
const deleteProductByID = async (id) => {
  const deletedProduct = await Product.findByIdAndDelete(id);
  return deletedProduct;
};
module.exports = {
  createProduct,
  getAllProducts,
  getProductByID,
  updateProductDetail,
  deleteProductByID,
};
