const db = require("../knex/knexDb");
const {
  getUserByIdModel,
  getAllUsersModel,
  createNewUserSQL,
} = require("../models/userModels");

async function getUserById(req, res) {
  try {
    const userById = await getUserByIdModel(req.body.userId);
    const allUsers = await getAllUsersModel();
    sortPlace(allUsers);
    const userWithPlace = allUsers.filter((user) => user.id == userById.id);
    res.send(userWithPlace);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

function sortPlace(users) {
  users.sort((a, b) => b.Scores - a.Scores);
  users.forEach((user, index) => {
    user.place = index + 1;
  });
  return users;
}

async function getAllUsers(req, res) {
  try {
    const users = await getAllUsersModel();
    sortPlace(users);
    res.send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
async function CreateNewUser(req, res) {
  try {
    const newUserId = await createNewUserSQL(req.body);
    res.send(newUserId);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

module.exports = {
  getUserById,
  getAllUsers,
  CreateNewUser,
};
