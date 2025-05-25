const express = require('express');
const router = express.Router();
const { createResume } = require('../controllers/resumeController');

// POST route to save resume data
router.post('/', createResume);

module.exports = router;
