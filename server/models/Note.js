// Note entity database stuff
// table creation
const notes = [
    {
      content: "As-salam walekum",
    },
    {
      content: "Namaste",
    },
    {
      content: "Hello",
    }
]

// CRUD functions
let getNotes = () => notes;

function getNotes2() {
  return notes;
}

// export functions so can utilize them in another
// file in application
module.exports = {getNotes, getNotes2}
