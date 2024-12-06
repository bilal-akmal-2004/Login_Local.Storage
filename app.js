var isLogin = JSON.parse(localStorage.getItem("login"));
console.log(isLogin);
if (isLogin) {
  window.location.replace("./pages/dashboard/dashboard.html");
}

var url = window.location.href;
console.log(window.location.hostname);

// window.location.replace("https://www.google.com") ;

function getData() {
  return JSON.parse(localStorage.getItem("users"));
}
function setData(data) {
  localStorage.setItem("users", JSON.stringify(data));
}

var users = getData() ? [...getData()] : [];
console.log(users);
// users = [
//   ...users,
//   {
//     username: "Bilal",
//     password: "123123",
//     email: "bilal123@gmail.com",
//   },
// ];
// setData(users);
console.log(users);
function checkUserName(e) {
  for (let i = 0; i < e.target.value.length; i++) {
    if (e.target.value.length > 15) {
      e.target.nextElementSibling.innerText = `Username should be less than 15 letters !`;
    } else {
      e.target.nextElementSibling.innerText = ``;
    }
  }
}
function checkPassword(e) {
  for (let i = 0; i < e.target.value.length; i++) {
    if (e.target.value.length < 5) {
      e.target.nextElementSibling.innerText = `Weak Password !`;
    } else {
      e.target.nextElementSibling.innerText = ``;
    }
  }
}
let emailCheckFlag = true;
function checkEmail(e) {
  for (let i = 0; i < users.length; i++) {
    console.log(users[i].email);
    if (users[i].email == e.target.value) {
      emailCheckFlag = false;
      e.target.nextElementSibling.innerText = `Email already taken !`;
    } else if (
      e.target.value.indexOf("@") === -1 ||
      e.target.value.indexOf(".") === -1 ||
      e.target.value.length <= e.target.value.indexOf(".") + 2
    ) {
      e.target.nextElementSibling.innerText = `Make sure the email sturcture is correct!`;
    } else {
      emailCheckFlag = true;
      e.target.nextElementSibling.innerText = ``;
    }
  }
}

function submitForm(e) {
  e.preventDefault();

  var emailInp = document.getElementById("email").value;
  var usernameInp = document.getElementById("username").value;
  var passwordInp = document.getElementById("password").value;

  if (emailCheckFlag === true) {
    users = [
      ...users,
      { username: usernameInp, password: passwordInp, email: emailInp },
    ];
    let loginData = { password: passwordInp, email: emailInp };
    localStorage.setItem("login", JSON.stringify(loginData));
    window.location.replace("./pages/dashboard/dashboard.html");
    emailCheckFlag = false;
  } else {
    alert("Make sure the email is not already taken !");
  }

  setData(users);
  console.log(users);
}
