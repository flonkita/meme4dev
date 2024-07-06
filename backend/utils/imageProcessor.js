const Jimp = require("jimp");

const processImage = async (imagePath, textTop, textMiddle, textBottom) => {
  const image = await Jimp.read(imagePath);

  // Ajouter du texte à l'image
  // Implementation d'ajout de texte selon vos besoins

  const newPath = `processed-${Date.now()}-${imagePath}`;
  await image.writeAsync(newPath);
  return newPath;
};

module.exports = { processImage };
