const Category = require("../models/category.model");

// method to add new Category
const addCategory = async (categoryDetail) => {
  const newCategory = new Category({
    title: categoryDetail.title,
    desc: categoryDetail.desc,
  });

  const addedCategory = newCategory.save();
  return addedCategory;
};

// method to get Category detail by id
const getCategoryByID = async (id) => {
  const categoryDetails = await Category.findById(id);
  console.log("category in service - ", categoryDetails);
  return categoryDetails;
};

//method to get all Category list
const getAllCategory = async () => {
  const categoryList = await Category.find();
  return categoryList;
};

// method to update Category detail
const updateCategoryDetail = async (id, detail) => {
  const updatedCategory = await Category.findByIdAndUpdate(
    id,
    { $set: detail },
    { new: true }
  );

  console.log(updatedCategory);
  return updatedCategory;
};

// method to delete Category by id
const deleteCategoryByID = async (id) => {
  const deletedCategory = await Category.findByIdAndDelete(id);
  return deletedCategory;
};
module.exports = {
  addCategory,
  getAllCategory,
  getCategoryByID,
  updateCategoryDetail,
  deleteCategoryByID,
};
