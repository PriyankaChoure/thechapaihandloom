const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, heroImage, cb) => {
    cb(null, "public/images");
  },
  filename: (req, heroImage, cb) => {
    cb(null, heroImage.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });
module.exports = {
  upload,
};
