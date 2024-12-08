function submitForm(e) {
  e.preventDefault();
}
let userName = JSON.parse(localStorage.getItem("login"));
let h3 = document.getElementById("userName");
h3.innerHTML = `<b>Username: ${userName.username}</b>`;
function logout() {
  localStorage.removeItem("login");
  window.location.replace("../login/login.html");
}
