const express = require('express');
const bodyParser = require('body-parser'); // Require body-parser
const cors = require('cors'); // Require cors
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes');

// Middleware for JSON parsing using body-parser
app.use(bodyParser.json());

// Adds CORS middleware to allow requests from any origin
app.use(cors());

// Use the user registration routes
app.use('/api/users', userRoutes);
// app.get('/api/users',(req, res) => {
//   res.json(users)
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
