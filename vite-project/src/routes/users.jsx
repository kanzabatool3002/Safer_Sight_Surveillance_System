const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming you have a User model
const bcrypt = require('bcryptjs'); // For password hashing

// User registration route
router.post('/register', async (req, res) => {
  // 1. Extract user data from the request body
  const { email, password, confirmPassword, region, mobile } = req.body;

  // 2. Input validation (optional)
  // You can add checks here to ensure email format, password strength, etc.

  // 3. Check for existing email
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }

  // 4. Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // 5. Create a new user
  const newUser = new User({
    email,
    password: hashedPassword,
    region, // Add additional fields from signup form
    mobile
  });

  // 6. Save the user to the database
  try {
    const savedUser = await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// ... other routes

module.exports = router;
