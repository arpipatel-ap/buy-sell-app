const db = require('../connection');

// CREATE
const addUser = function(name, email, password, phone) {
  return db.query(
    `INSERT
    INTO users
    (name, email, password, phone)
    VALUES
    ($1, $2, $3, $4)
    RETURNING *;
    `, [name, email, password, phone])
    .then(data => {
      return data.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// READ by id
const getUserById = function(id) {
  return db.query(
    `SELECT *
    FROM users
    WHERE id = $1;`, [id])
    .then(data => {
      return data.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// READY by email
const getUserByEmail = function(email) {
  return db.query(
    `SELECT *
    FROM users
    WHERE email = $1;`, [email])
    .then(data => {
      return data.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getUserById, getUserByEmail, addUser };
