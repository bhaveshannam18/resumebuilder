const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const keys = require('../config/keys');
const User = require('../models/User');
require('dotenv').config();

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ email: 'Email already exists' });
    }

    // Create new user instance
    const newUser = new User({
      name,
      email,
      password
    });

    // Hash password before saving in database
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);
    newUser.password = hash;

    // Save user to database
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ error: 'An error occurred. Please try again.' });
  }
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Find user by email
    User.findOne({ email }).then(user => {
      if (!user) {
        return res.status(404).json({ emailnotfound: 'Email not found' });
      }
  
      // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched, create JWT payload
          const payload = {
            id: user.id,
            name: user.name
          };

  
          // Sign token
          jwt.sign(
            payload,
            // keys.secretOrKey,
            process.env.SECRETKEY,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token,
                user: {
                  _id: user._id,
                  name: user.name,
                  email: user.email,
                }
              });
            }
          );
        } else {
          return res.status(400).json({ passwordincorrect: 'Password incorrect' });
        }
      });
    });
  });

  
module.exports = router;
