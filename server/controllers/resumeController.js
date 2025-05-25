const Resume = require('../models/Resume');

// @desc    Save a new resume
// @route   POST /api/resume
exports.createResume = async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    const savedResume = await newResume.save();
    res.status(201).json(savedResume);
  } catch (error) {
    res.status(400).json({ message: 'Failed to save resume', error });
  }
};