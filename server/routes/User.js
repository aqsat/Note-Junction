const express = require("express")
//const User = require("../models/user")
//Sconst User = require("../models/User")
const { getUsers } = require("../models/user")

const router = express.Router()

router.get('/getAllUsers', (req, res) => {
  try {
    const users =getUsers();
    res.send(users)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})


module.exports = router;