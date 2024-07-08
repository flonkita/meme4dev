const Jimp = require("jimp");

const processImage = async (imagePath, textTop, textMiddle, textBottom) => {
  const image = await Jimp.read(imagePath);


  const newPath = `processed-${Date.now()}-${imagePath}`;
  await image.writeAsync(newPath);
  return newPath;
};

module.exports = { processImage };
