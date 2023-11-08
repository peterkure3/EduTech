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
  const client = await pool.connect();
  try {
    // Start a transaction
    await client.query('BEGIN');

    // Delete the course by ID
    const query = 'DELETE FROM courses WHERE course_id = $1 RETURNING *';
    const { res } = await pool.query(query, [courseId]);
    // If no rows were returned, no course was deleted; hence, throw an error
    if (res.rowCount === 0) {
      throw new Error(`Course with ID: ${courseId} not found or already deleted`);
    }

    // Commit the transaction
    await client.query('COMMIT');
    
    return res.rows[0]; // Return the deleted course information
  } catch (error) {
    // If an error occurred, rollback the transaction
    await client.query('ROLLBACK');
    throw error;
  } finally {
    // Release the client back to the pool
    client.release();
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

