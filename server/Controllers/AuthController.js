// controllers/authController.js
const Teacher = require('../models/teacher');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// Login Controller (authenticate teacher and generate JWT)
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find teacher by email
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    // Compare the password
    const isMatch = await teacher.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: teacher._id, role: teacher.role }, JWT_SECRET, {
      expiresIn: '1h', // Token expiration time (1 hour)
    });

    // Send response with token
    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Register Controller (create a new teacher)
exports.register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if teacher already exists
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ success: false, message: 'Teacher already exists' });
    }

    // Create new teacher
    const newTeacher = new Teacher({ firstName, lastName, email, password });

    // Save teacher to DB
    await newTeacher.save();

    res.status(201).json({ success: true, message: 'Teacher registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
