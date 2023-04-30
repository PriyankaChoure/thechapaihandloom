const httpStatus = require("http-status");
const categoryService = require("../services/category.service");

// method to add new Ctaegory
const addCategory = async (req, res) => {
  const categoryDetail = req.body;
  try {
    const newCategory = await categoryService.addCategory(categoryDetail);
    if (newCategory) {
      res.status(httpStatus.CREATED).json(newCategory);
    } else {
      res.status(httpStatus.BAD_REQUEST).json("Error while creating category");
    }
  } catch (err) {
    console.log("error to create new category -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};
// method to found all Category
const getAllCategory = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategory();
    if (categories) {
      res.status(httpStatus.OK).json(categories);
    } else {
      res.status(httpStatus.BAD_REQUEST).json("no category found");
    }
  } catch (err) {
    console.log("error to get user list -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

// method to found category detail by id
const getCategory = async (req, res) => {
  try {
    const categoryDetail = await categoryService.getCategoryByID(req.body.id);
    if (categoryDetail) {
      res.status(httpStatus.OK).json(categoryDetail);
    } else {
      res.status(httpStatus.BAD_REQUEST).json("category not found");
    }
  } catch (err) {
    console.log("error to get user -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

// method to update category details
const updateCategoryDetails = async (req, res) => {
  const { id, ...detail } = req.body;
  try {
    const updatedCategory = await categoryService.updateCategoryDetail(
      id,
      detail
    );
    res.status(httpStatus.OK).json(updatedCategory);
  } catch (err) {
    console.log(err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

// method to delete any category by id
const deleteCategory = async (req, res) => {
  try {
    const categoryDetail = await categoryService.deleteCategoryByID(
      req.body.id
    );
    if (categoryDetail) {
      res.status(httpStatus.OK).json("Category deleted successfully");
    } else {
      res.status(httpStatus.BAD_REQUEST).json("Category not found");
    }
  } catch (err) {
    console.log("error to get category -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

module.exports = {
  addCategory,
  getAllCategory,
  getCategory,
  updateCategoryDetails,
  deleteCategory,
};
