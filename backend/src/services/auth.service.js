const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const newUser = new User({
    username: userData.username,
    password: hashedPassword,
    email: userData.email,
    contact: userData.contact,
    usertype: userData.usertype,
  });
  console.log(Object.keys(userData.address).length);
  if (Object.keys(userData.address).length !== 0) {
    newUser.address = userData.address;
  }
  //   console.log(newUser);
  const user = await newUser.save();
  return user;
};
module.exports = {
  createUser,
};
