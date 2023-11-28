// controllers/authController.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const secretKey = 'your-secret-key';

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Replace this with your actual authentication logic
    const user = await User.findOne({ username, password });

    if (user) {
      const token = jwt.sign({ username }, secretKey);
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  login,
};
