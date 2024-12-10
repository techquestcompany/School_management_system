// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const Teacher = require('../models/Teachers');

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// Middleware to protect routes and verify JWT token
exports.protect = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ success: false, message: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach the teacher info to the request object
    req.teacher = decoded;

    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    console.error(err);
    return res.status(401).json({ success: false, message: 'Token is not valid' });
  }
};
