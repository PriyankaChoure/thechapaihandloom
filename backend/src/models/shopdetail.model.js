const mongoose = require("mongoose");
const ShopSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "can't be blank"],
    },
    desc: { type: String, required: true },
    imageList: { type: Array },
    videos: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shop", ShopSchema);
