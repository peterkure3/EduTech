const userModel = require('../models/userModel');

async function registerUser(req, res) {
  try {
    console.log(req.body)
    const { username, email, password } = req.body;

    // Input validation
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Missing username, email, or passwords' });
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

async function getUsers(req, res) {
  try {
    const users = await userModel.getAllUsers(); // Define this function in your userModel
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
}

module.exports = {
  registerUser,
  getUsers,
};



