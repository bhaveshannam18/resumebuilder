// server.js

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 7000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
console.log("Here")
app.use('/api/auth', authRoutes);
app.use('/api/resume', resumeRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
