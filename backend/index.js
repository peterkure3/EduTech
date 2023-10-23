const express = require('express');
const bodyParser = require('body-parser'); // Require body-parser
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes');

// Middleware for JSON parsing using body-parser
app.use(bodyParser.json());

// Use the user registration routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
