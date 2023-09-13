const httpStatus = require("http-status");
const productService = require("../services/product.service");

// method to add new Product
const addProduct = async (req, res) => {
  // console.log(req.files);
  const productDetail = {
    title: req.body.title,
    desc: req.body.desc,
    category: req.body.category,
    color: req.body.color,
    price: req.body.price,
    sku: req.body.sku,
    heroImage: req.body.heroImage,
    imageList: req.body.productImages,
  };
  console.log("product details - ", productDetail);
  try {
    const newProduct = await productService.createProduct(productDetail);
    if (newProduct) {
      res.status(httpStatus.CREATED).json(newProduct);
    } else {
      res.status(httpStatus.BAD_REQUEST).json("Error while creating product");
    }
  } catch (err) {
    console.log("error to create new product -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};
// method to found all Products
const getAllProducts = async (req, res) => {
  try {
    console.log("in product controller -");
    const products = await productService.getAllProductList();
    console.log(products.length);
    if (products) {
      res.json(products);
    } else {
      res.status(httpStatus.BAD_REQUEST).json("no product found");
    }
  } catch (err) {
    console.log("error to get product list -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

// method to found product detail by id
const getProduct = async (req, res) => {
  try {
    const productDetail = await productService.getProductByID(req.params.id);
    if (productDetail) {
      res.status(httpStatus.OK).json(productDetail);
    } else {
      res.status(httpStatus.BAD_REQUEST).json("product not found");
    }
  } catch (err) {
    console.log("error to get product -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

// method to update Product details
const updateProductDetails = async (req, res) => {
  const { id, ...detail } = req.body;
  try {
    const updatedProduct = await productService.updateProductDetail(id, detail);
    res.status(httpStatus.OK).json(updatedProduct);
  } catch (err) {
    console.log(err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

// method to delete any product by id
const deleteProduct = async (req, res) => {
  try {
    const productDetail = await productService.deleteProductByID(req.body.id);
    if (productDetail) {
      res.status(httpStatus.OK).json("product deleted successfully");
    } else {
      res.status(httpStatus.BAD_REQUEST).json("product not found");
    }
  } catch (err) {
    console.log("error to delete product -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProduct,
  updateProductDetails,
  deleteProduct,
};
