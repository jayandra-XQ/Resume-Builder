const express = require("express");
const router = express.Router();
const { generateExperience } = require("../controllers/aiController");

router.post("/generate-experience", generateExperience);

module.exports = router;
