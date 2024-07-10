const fs = require('fs');
const path = require('path');
const { processImage } = require("../utils/imageProcessor");
const { upload } = require("../utils/fileUpload");

const uploadsDir = path.join(__dirname, '../uploads');

exports.getAllMemes = (req, res) => {
  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan files!');
    }
    const memes = files.map((file, index) => ({ id: index, imagePath: file }));
    console.log(memes);
    res.json(memes);
  });
};

exports.createMeme = (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(500).send(err);

    const { textTop, textMiddle, textBottom } = req.body;
    const imagePath = req.file.path;

    try {
      const newImagePath = await processImage(
        imagePath,
        textTop,
        textMiddle,
        textBottom
      );
      const newFileName = path.basename(newImagePath);
      res.json({ imagePath: newFileName, textTop, textMiddle, textBottom });
    } catch (err) {
      res.status(500).send(err);
    }
  });
};

exports.getMemeById = (req, res) => {
  const memeId = req.params.id;
  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan files!');
    }
    const memeFile = files[memeId];
    if (!memeFile) return res.status(404).send("Mème non trouvé");
    res.sendFile(path.join(uploadsDir, memeFile));
  });
};

exports.deleteMeme = (req, res) => {
  const memeId = req.params.id;
  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan files!');
    }
    const memeFile = files[memeId];
    if (!memeFile) return res.status(404).send("Mème non trouvé");

    fs.unlink(path.join(uploadsDir, memeFile), (err) => {
      if (err) {0

        
        return res.status(500).send('Unable to delete file!');
      }
      res.json({ success: true });
    });
  });
};
