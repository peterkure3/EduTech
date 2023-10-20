const pool = require('../config/db');

async function createUser(user) {
  const query = {
    text: 'INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *',
    values: [user.username, user.email, user.password],
  };
  const { rows } = await pool.query(query);
  return rows[0];
}

module.exports = { createUser };
