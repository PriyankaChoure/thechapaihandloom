const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log("token", token);
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      console.log("error", err);
      console.log("user", user);
      if (err) res.status(httpStatus.FORBIDDEN).json("Token is not valid");

      req.user = user;
      next();
    });
  } else {
    return res.json(httpStatus.UNAUTHORIZED).json("You are not authenticate!");
  }
};
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log(req.user);
    console.log(req.params.id);
    if (req.user.id === req.params.id) {
      next();
    } else {
      res.status(httpStatus.FORBIDDEN).json("You are not allowd to do that!");
    }
  });
};

module.exports = {
  verifyTokenAndAuthorization,
};
