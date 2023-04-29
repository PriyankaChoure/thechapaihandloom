const User = require("../models/user.model");

// method to get user detail by id
const getUserByID = async (userID) => {
  const userdetail = await User.findById(userID, { password: 0 });
  console.log("user in service - ", userdetail);
  return userdetail;
};

//method to get all user list
const getAllUsers = async () => {
  const users = await User.find({}, { password: 0 });
  return users;
};

// method to update user detail
const updateUserDetails = async (userID, userDetail) => {
  const updatedUser = await User.findByIdAndUpdate(
    userID,
    { $set: userDetail },
    { new: true }
  );
  const { password, ...others } = updatedUser._doc;
  console.log(others);
  return others;
};

// method to delete user by id
const deleteUserByID = async (userID) => {
  const deletedUser = await User.findByIdAndDelete(userID);
  return deletedUser;
};
module.exports = {
  getAllUsers,
  getUserByID,
  updateUserDetails,
  deleteUserByID,
};
