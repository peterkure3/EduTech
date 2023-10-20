const userModel = require('../models/userModel');

async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;
    const user = await userModel.createUser({ username, email, password });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
}

module.exports = { registerUser };
