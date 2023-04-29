const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const userService = require("../services/user.service");
// method to found all user
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    if (users) {
      res.status(httpStatus.OK).json(users);
    } else {
      res.status(httpStatus.BAD_REQUEST).json("no user found");
    }
  } catch (err) {
    console.log("error to get user list -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

// method to found user detail by id
const getUser = async (req, res) => {
  try {
    const userDetail = await userService.getUserByID(req.body.userid);
    if (userDetail) {
      res.status(httpStatus.OK).json(userDetail);
    } else {
      res.status(httpStatus.BAD_REQUEST).json("user not found");
    }
  } catch (err) {
    console.log("error to get user -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

// method to update user details
const updateUserDetails = async (req, res) => {
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }

  try {
    const updatedUser = await userService.updateUserDetails(
      req.params.id,
      req.body
    );
    res.status(httpStatus.OK).json(updatedUser);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

// method to delete any user by id
const deleteUser = async (req, res) => {
  try {
    const userDetail = await userService.deleteUserByID(req.body.userid);
    if (userDetail) {
      res.status(httpStatus.OK).json("user deleted successfully");
    } else {
      res.status(httpStatus.BAD_REQUEST).json("user not found");
    }
  } catch (err) {
    console.log("error to get user -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  updateUserDetails,
  deleteUser,
};
