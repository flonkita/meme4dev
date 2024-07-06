const mongoose = require("mongoose");

const memeSchema = new mongoose.Schema({
  imagePath: String,
});

module.exports = mongoose.model("Meme", memeSchema);
