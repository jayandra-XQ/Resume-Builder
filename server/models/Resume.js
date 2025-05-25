const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  education: { type: String, required: true },
  experience: { type: String, required: true },
  skills: { type: String, required: true },
  projects: [
    {
      title: String,
      description: String,
      link: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Resume', resumeSchema);
