

const con = require("./db_connect");

async function createTable() {
  let sql = `
    CREATE TABLE IF NOT EXISTS User (
      userid INT AUTO_INCREMENT PRIMARY KEY,
      firstname VARCHAR(255) NOT NULL,
      lastname VARCHAR(255) NOT NULL,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `;
  await con.query(sql);
}

createTable();

async function login(user) {
  let userResult = await getUser(user.user_name);
  if (!userResult[0]) throw Error("Username not found!!");
  if (userResult[0].password !== user.password) throw Error("Password Incorrect!!");
  return userResult[0];
}

// Register (Create) New User
async function register(user) {
  let userResult = await getUser(user.user_name);
  if (userResult.length > 0) throw Error("Username already in use!!");

  let sql = `
    INSERT INTO User(firstname, lastname, username, password)
    VALUES("${user.first_name}", "${user.last_name}", "${user.user_name}", "${user.password}")
  `;

  await con.query(sql);
  const newUser = await getUser(user.user_name);
  return newUser[0];
}

// // Update - CRUD
async function editUser(user) {
  let updatedUser = await getUser(user.username);
  if (updatedUser.length > 0) throw Error("Username not available!");

  let sql = `
  UPDATE User
  SET
    firstname = "${user.firstname}",
    lastname = "${user.lastname}",
    username = "${user.username}"
  WHERE userid = ${user.userid}`;

  ;


  await con.query(sql);
  updatedUser = await getUser(user.username);
  return updatedUser[0];
}


// Delete User
async function deleteUser(user) {
  let sql = `DELETE FROM User WHERE userid = ${user.userid}`;
  await con.query(sql);
}

//get all Users
/*async function getAllUsers() {
  const sql = 'SELECT * FROM User';
  const result = await con.query(sql);
  console.log(result); // This line will log the result to the console
  return result;
}*/

// Useful functions
async function getUser(username) {
  let sql = `
    SELECT * FROM User 
    WHERE username = "${username}" 
  `;
  return await con.query(sql);
}

module.exports = { login, register, editUser, deleteUser , /* getAllUsers*/ };
