const httpStatus = require("http-status");
const authService = require("../services/auth.service");
const register = async (req, res) => {
  const userData = req.body;
  console.log(userData);
  try {
    const savedUser = await authService.createUser(userData);
    if (!savedUser) {
      res.status(httpStatus.BAD_REQUEST).json("not able to create user");
    } else {
      res.status(httpStatus.OK).json(savedUser);
    }
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json("This email is already registerd");
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};
module.exports = {
  register,
};
