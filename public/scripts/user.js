
import { fetchData, setCurrentUser } from "./main.js";

let registrationForm = document.getElementById("registrationForm");
if (registrationForm) registrationForm.addEventListener('submit', register);

let loginForm = document.getElementById("loginForm");
if (loginForm) loginForm.addEventListener('submit', login);

function register(e) {
  e.preventDefault();

  let user = {
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    user_name: document.getElementById("user_name").value,
    password: document.getElementById("password").value
  };

  fetchData("/users/register", user, "POST")
    .then(data => {
      if (!data.message) {
        // localStorage.setItem('user',  JSON.stringify(user))
        setCurrentUser(data);
        window.location.href = "Note.html";
      }
    })
    .catch(err => {
      console.log(err);
      let errorSection = document.querySelector("#registrationForm .error");
      errorSection.innerText = err.message;
      document.getElementById("first_name").value = "";
      document.getElementById("last_name").value = "";
      document.getElementById("user_name").value = "";
      document.getElementById("password").value = "";
    });
}

function login(e) {
  e.preventDefault();

  let user = {
    user_name: document.getElementById("user_name").value,
    password: document.getElementById("password").value
  };

  fetchData("/users/login", user, "POST")
    .then(data => {
      if (!data.message) {
        // localStorage.setItem('user',  JSON.stringify(user))
        setCurrentUser(data);
        window.location.href = "Note.html";
      }
    })
    .catch(err => {
      let errorSection = document.querySelector("#loginForm .error");
      errorSection.innerText = err.message;
      document.getElementById("user_name").value = "";
      document.getElementById("password").value = "";
    });
}
