const mongoose = require("mongoose");

const MemeSchema = new mongoose.Schema({
  imagePath: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  textTop: String,
  textMiddle: String,
  textBottom: String,
});

module.exports = mongoose.model("Meme", MemeSchema);
