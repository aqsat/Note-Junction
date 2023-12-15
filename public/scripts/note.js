import { logout } from "./main.js";

let notes;

const notesDiv = document.getElementById('notes');

console.log(notesDiv);

const create_element = (content) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div>${content}</div>
    `;
    return card;
  };

  const renderNotes = () => {
    notesDiv.innerHTML = ""; 
  
    if (notes && notes.length > 0) {
      notes.forEach((note) => {
        const noteElement = create_element(note.content);
        notesDiv.appendChild(noteElement);
      });
    } else {
        notesDiv.innerHTML = "<p>No notes yet</p>";
    }
  };

  
  const getNotes = async () => {
    console.log("in get notes");
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      const response = await fetch("http://localhost:3000/notes/allnotes", {
        method: "POST",
        body: JSON.stringify({
          userid: user.userid,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        const res = await response.json();
        notes = res;
        renderNotes();
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };
  

  const addNote = async (content) => {
    const date = new Date();
    const user = JSON.parse(localStorage.getItem("user"));
  
    try {
      const response = await fetch("http://localhost:3000/notes/postnotes", {
        method: "POST",
        body: JSON.stringify({
          userid: user.userid,
          content: content
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 201) {
        const res = await response.json();
        // console.log(nots)
        notes.push({ content });
        const noteElement = create_element(content);
        notesDiv.appendChild(noteElement);
        renderNotes();
        console.log(notes)
      }
  
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  getNotes();


document.addEventListener('DOMContentLoaded', function() {
    var noteForm = document.getElementById('noteForm');

    if (noteForm) {
        noteForm.addEventListener('submit', function(event) {
            event.preventDefault();

            var note = document.getElementById('take_note').value;

            console.log("yaha tak", note);
            addNote(note)

            document.getElementById('take_note').value = "";
        });
    }
});

const logoutButton = document.getElementById("logout")

console.log(logoutButton)

logoutButton.addEventListener("click", () => {
    logout();
})