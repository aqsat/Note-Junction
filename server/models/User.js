// User entity database stuff
// table creation
const users = [
    {
      username: "Aqsat",
      password: "123"
    },
    {
      username: "Asif",
      password: "345"
    },
    {
      username: "Kittu",
      password: "567"
    }
  ]
  
  // CRUD functions
  let getUsers = () => users;
  
  function getUsers2() {
    return users;
  }
  
  // export functions so can utilize them in another
  // file in application
  module.exports = {getUsers, getUsers2}

