const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("form");

// -----------------------------------
// Check localStorage on page load
// -----------------------------------
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
  existingBtn.style.display = "block";   // show button if credentials exist
}

// -----------------------------------
// Form Submit
// -----------------------------------
form.addEventListener("submit", function (e) {
  e.preventDefault();  // stop page refresh

  const username = usernameInput.value;
  const password = passwordInput.value;

  alert("Logged in as " + username);

  if (checkbox.checked) {
    // Save credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // Remove stored credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Show/hide "existing user" button
  const su = localStorage.getItem("username");
  const sp = localStorage.getItem("password");

  if (su && sp) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
});

// -----------------------------------
// Login as existing user
// -----------------------------------
existingBtn.addEventListener("click", function () {
  const su = localStorage.getItem("username");
  alert("Logged in as " + su);
});
