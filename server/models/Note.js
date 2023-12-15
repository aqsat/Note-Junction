const con = require("./db_connect");

async function createTable() {
  let sql = `
    CREATE TABLE IF NOT EXISTS Note (
      noteid INT AUTO_INCREMENT PRIMARY KEY,
      content TEXT NOT NULL,
      userid INT,
      FOREIGN KEY (userid) REFERENCES User(userid)
    );
  `;
  await con.query(sql);
}

createTable();

// Create a new note
async function createNote(note) {
  let sql = `
    INSERT INTO Note (content, userid)
    VALUES("${note.content}", ${note.userid})
  `;
  await con.query(sql);
}

// Read a note by ID
async function getNoteById(noteid) {
  let sql = `
    SELECT * FROM Note
    WHERE noteid = ${noteid}
  `;
  return await con.query(sql);
}

//  get all notes by user ID
async function getAllNotesByUserId(userId) {
  const sql = 'SELECT * FROM Note WHERE userid = ?';
  const values = [userId];
  const result = await con.query(sql, values);
  console.log(result); 
  return result;
}


// Update a note by ID
async function updateNoteById(noteId, updatedNote) {
  try {
    const sql = 'UPDATE Note SET content = ? WHERE noteid = ?';
    const values = [updatedNote.content, noteId];

    await con.query(sql, values);
  } catch (error) {
    throw error;
  }
}

// Delete a note by ID
async function deleteNoteById(noteid) {
  let sql = `
    DELETE FROM Note
    WHERE noteid = ${noteid}
  `;
  await con.query(sql);
}

module.exports = { createNote, getNoteById,  updateNoteById, deleteNoteById , getAllNotesByUserId};
