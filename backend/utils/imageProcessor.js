const Jimp = require("jimp");
const path = require('path');

const processImage = async (imagePath, textTop, textMiddle, textBottom) => {
  try {
    const image = await Jimp.read(imagePath);
    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);

    if (textTop) {
      image.print(font, 10, 10, textTop);
    }
    if (textMiddle) {
      image.print(font, 10, image.getHeight() / 2 - 16, textMiddle);
    }
    if (textBottom) {
      image.print(font, 10, image.getHeight() - 50, textBottom);
    }

    const uploadsDir = 'uploads';
    const newPath = path.join(uploadsDir, `${imagePath}`);
    await image.writeAsync(newPath);
    console.log("Image processed and saved at:", newPath);
    return newPath;
  } catch (error) {
    console.error("Error processing image:", error);
    throw error;
  }
};

module.exports = { processImage };
