const express = require("express");

const router = express.Router();

const {
  generateContent,
  getAllContent,
} = require("../controllers/contentController");

router.post("/generate", generateContent);
router.get("/", getAllContent);

module.exports = router;