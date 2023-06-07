const dbConnection = require("../knex/knexDb");

async function getUserByIdModel(userId) {
  try {
    const user = await dbConnection("users").where("id", userId).first();
    // console.log(user)
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
async function getAllUsersModel() {
  try {
    const users = await dbConnection("users");

    return users;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
async function createNewUserSQL(newUser) {
  const { Nickname, Scores } = newUser;
  try {
    const insertUser = await dbConnection("users").insert({
        Nickname,
        Scores,
    });
    return { status: true, userId: insertUser };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = {
  getUserByIdModel,
  getAllUsersModel,
  createNewUserSQL,
};
