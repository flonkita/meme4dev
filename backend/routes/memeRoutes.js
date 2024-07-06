const express = require("express");
const router = express.Router();
const memeController = require("../controllers/memeController");

router.get("/", memeController.getAllMemes);
router.post("/", memeController.createMeme);
router.get("/:id", memeController.getMemeById);
router.delete("/:id", memeController.deleteMeme);

module.exports = router;
