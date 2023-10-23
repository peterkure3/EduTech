const userModel = require('../models/userModel');

async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;

    // Input validation
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Missing username, email, or password' });
    }

    // You can add additional validation checks here if needed

    // Create the user if input is valid
    const user = await userModel.createUser({ username, email, password });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
}

module.exports = { registerUser };
