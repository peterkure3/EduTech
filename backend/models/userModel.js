const pool = require('../config/db');

// creating users
async function createUser(user) {
  const query = {
    text: 'INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *',
    values: [user.username, user.email, user.password],
  };
  const { rows } = await pool.query(query);
  return rows[0];
}
// getting all users
async function getAllUsers() {
  try {
    const query = 'SELECT * FROM users';
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
}
// logging in
async function loginUser(username, password) {
  try {
    const query = {
      text: 'SELECT * FROM users WHERE username = $1 AND password = $2',
      values: [username, password],
    };
    const { rows } = await pool.query(query);
    return rows[0];
  } catch (error) {
    throw error;
  }
}
// getting all courses
async function getAllCourses() {
  try {
    const query = 'SELECT * FROM courses';
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
}
// adding courses
async function addCourse(course) {
  const query = {
    text: 'INSERT INTO courses(name, description, category, level, duration, price, primary_language) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    values: [
      course.name, 
      course.description, 
      course.category, 
      course.level, 
      course.duration, 
      course.price, 
      course.primary_language
    ],
  };
  const { rows } = await pool.query(query);
  return rows[0];
}
// deleting the course
async function deleteCourse(courseId) {
  try {
    const query = 'DELETE FROM courses WHERE course_id = $1 RETURNING *'; // Replace 'id' with your actual primary key column name
    const result = await pool.query(query, [courseId]); // Execute the query with the courseId

    // Check if the result object is as expected
    if (!result || !result.rows) {
      throw new Error('Unexpected result object');
    }

    return result; // Return the entire result object to handle it in the controller
  } catch (error) {
    console.error('Error in deleteCourse:', error);
    throw error; // Rethrow the error to be caught by the controller
  }
}
// const createUser = (request, response) => {
//   const { name, email, password } = request.body

//   pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, password], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`User added with ID: ${results.rows[0].id}`)
//   })
// }

module.exports = {
   createUser,
   getAllUsers,
    loginUser, 
    getAllCourses,
    addCourse,
    deleteCourse  
  };

