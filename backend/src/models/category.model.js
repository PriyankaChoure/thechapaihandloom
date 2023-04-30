const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "can't be blank"],
      unique: true,
      index: true,
    },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
