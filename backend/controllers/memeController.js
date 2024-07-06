const Meme = require("../models/meme");
const { processImage } = require("../utils/imageProcessor");
const { upload } = require("../utils/fileUpload");

exports.getAllMemes = (req, res) => {
  Meme.find({}, (err, memes) => {
    if (err) return res.status(500).send(err);
    res.json(memes);
  });
};

exports.createMeme = (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(500).send(err);

    const { textTop, textMiddle, textBottom } = req.body;
    const imagePath = req.file.path;

    processImage(imagePath, textTop, textMiddle, textBottom)
      .then((newImagePath) => {
        const meme = new Meme({ imagePath: newImagePath });
        meme.save((err, savedMeme) => {
          if (err) return res.status(500).send(err);
          res.json(savedMeme);
        });
      })
      .catch((err) => res.status(500).send(err));
  });
};

exports.getMemeById = (req, res) => {
  Meme.findById(req.params.id, (err, meme) => {
    if (err) return res.status(500).send(err);
    res.json(meme);
  });
};

exports.deleteMeme = (req, res) => {
  Meme.findByIdAndDelete(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ success: true });
  });
};
