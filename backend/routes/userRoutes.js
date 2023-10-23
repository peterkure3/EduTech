const express = require('express');
const bodyParser = require('body-parser'); // Require body-parser
const router = express.Router();
const userController = require('../controllers/userController');

// Middleware for JSON parsing using body-parser
router.use(bodyParser.json());

// Register a new user
router.post('/register', userController.registerUser);

module.exports = router;
