function submitForm(e) {
  e.preventDefault();
}
function logout() {
  localStorage.removeItem("login");
  window.location.replace("../login/login.html");
}
