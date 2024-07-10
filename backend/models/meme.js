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

const Meme = mongoose.model("Meme", MemeSchema);

async function createMeme(imagePath, textTop, textMiddle, textBottom) {
  const newMeme = new Meme({
    imagePath,
    textTop,
    textMiddle,
    textBottom,
  });

  try {
    const savedMeme = await newMeme.save();
    console.log("Meme saved successfully:", savedMeme);
  } catch (error) {
    console.error("Error saving meme:", error);
  }
}
// createMeme("zerferf","retvrtv","rtvrtv","rgtvrtv");

module.exports = { Meme, createMeme };
