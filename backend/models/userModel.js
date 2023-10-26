const pool = require('../config/db');

async function createUser(user) {
  const query = {
    text: 'INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *',
    values: [user.username, user.email, user.password],
  };
  const { rows } = await pool.query(query);
  return rows[0];
}
async function getAllUsers() {
  try {
    const query = 'SELECT * FROM users';
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function loginUser(email, password) {
  try {
    const query = {
      text: 'SELECT * FROM users WHERE username = $1 AND password = $2',
      values: [email, password],
    };
    const { rows } = await pool.query(query);
    return rows[0];
  } catch (error) {
    throw error;
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

module.exports = { createUser, getAllUsers, loginUser };

