// const express = require("express")


const express = require("express")
const User = require("../models/User")
const router = express.Router()

router



// login post
.post('/login', async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.login(req.body)
    res.send({...user, Password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

// register route
.post('/register', async (req, res) => {
  try {
    console.log(req.body)
    const user = await User.register(req.body)
    res.send({...user, Password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

//edit route
.put('/edit', async (req, res) => {
  try {
    let user = await User.editUser(req.body)
    res.send({...user, Password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

//delete route
.delete('/delete', async (req, res) => {
  try {
    await User.deleteUser(req.body)
    res.send({success: "Good Riddance >:("})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})


module.exports = router;
