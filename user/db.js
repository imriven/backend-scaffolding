const db = require("../config/dbConfig");

module.exports = {
  getAll,
  getById,
  getByEmail,
  insertUser,
  updateUserProfile,
  removeUser
};

function getByEmail(email) {
  return db("user").where({ email }).first();
}

function insertUser(user) {
  return db("user").insert(user);
}

function updateUserProfile(id, changes) {
  return db("user").where({ id }).update(changes);
}

function getAll() {
  return db("user");
}

function getById(id) {
  return db("user").where({ id }).first();
}

function removeUser(id) {
  return db("user").where({ id }).del();
}
