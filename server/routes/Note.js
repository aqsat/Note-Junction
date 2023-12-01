const express = require("express")
const { getNotes } = require("../models/Note")

const router = express.Router()

router.get('/getAllNotes', (req, res) => {
  try {
    const notes = getNotes();
    res.send(notes)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

module.exports = router;
