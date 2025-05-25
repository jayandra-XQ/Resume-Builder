const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const resumeRoutes = require('./routes/resumeRoutes');
const aiRoutes = require('./routes/aiRoutes');

app.use('/api/resume', resumeRoutes);
app.use('/api/ai', aiRoutes)

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
