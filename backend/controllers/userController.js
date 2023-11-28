const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key'; // Replace with a strong secret key

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

async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await userModel.loginUser(username, password);
    if (user) {
      // Generate JWT token
      const token = jwt.sign({ username: user.username }, secretKey);

      // Return the token along with user information
      res.status(200).json({ user, token });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
}

async function getAllCourses(req, res) {
  try {
    const users = await userModel.getAllCourses(); // Define this function in your userModel
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
}
async function addCourse(req, res) {
  try {
    console.log(req.body)
    const { name,description, category, level, duration, price, primary_language } = req.body;

    // // Input validation
    // if (!name || !description|| !category|| !level|| !duration|| !price||!primary_language) {
    //   return res.status(400).json({ error: 'Missing name,description,category,level,duration,price,primary language' });
    // }

    // You can add additional validation checks here if needed

    // Create the user if input is valid
    const user = await userModel.addCourse({ name, description, category,level, duration, price, primary_language });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'adding course failed' });
  }
}
// delete course 
async function deleteCourse(req, res) {
  try {
    const { courseId } = req.params;
    const result = await userModel.deleteCourse(courseId);

    // Check if any row was affected
    if (result.rowCount === 0) {
      // No row was deleted, send a 404 response
      return res.status(404).json({ error: 'Course not found' });
    }

    // If everything went well, send a success response
    res.status(200).json({ message: 'Course deleted successfully', courseId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete course' });
  }
}

module.exports = {
  registerUser,
  getUsers,
  login,
  getAllCourses,
  addCourse,
  deleteCourse
};



