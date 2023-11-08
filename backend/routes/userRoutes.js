const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register a new user
router.post('/register', userController.registerUser);

// Get all users
router.get('/getusers', userController.getUsers);

// Login
router.post('/login', userController.login);

// Get all Courses
router.get('/courses', userController.getAllCourses);

// add courses
router.post('/addcourses', userController.addCourse);


module.exports = router;
