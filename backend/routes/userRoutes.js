const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Public route: Register a new user
router.post('/register', userController.registerUser);

// Public route: Login
router.post('/login', userController.login);

// Protected routes: Require authentication using authMiddleware
router.use(authMiddleware.authenticateToken);

// Protected route: Get all users
router.get('/getusers', userController.getUsers);

// Protected route: Get all Courses
router.get('/courses', userController.getAllCourses);

// Protected route: Add courses
router.post('/addcourses', userController.addCourse);

// Protected route: Deleting a course
router.delete('/courses/:courseId', userController.deleteCourse);

module.exports = router;
