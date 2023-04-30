const mongoose = require("mongoose");
const config = require("../config/config");
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "can't be blank"],
      unique: true,
      index: true,
    },
    desc: { type: String, required: true },
    category: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
    heroImage: { type: String },
    imageList: { type: Array },
    fabric: { type: String },
    // SKU: { type: String, unique: true },
    brand: { type: String },
    reviewCount: { type: Number },
    video: { type: String },
    rating: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
