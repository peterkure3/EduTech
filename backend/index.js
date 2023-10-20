const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes');

// Middleware for JSON parsing
app.use(express.json());

// Use the user registration routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
