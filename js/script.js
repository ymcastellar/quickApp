let username = document.getElementById('user').value;

function login() {
  let user = document.getElementById('user').value;
  let password = document.getElementById('password').value
  if (user == "admin" && password == "1234") {
    redirectAdmin();
  } else if (user == "coordinator" && password == "5678") {
    redirectCoordinator();
  }
  else {
    alert("User or Password invalid!");
  }
}

function redirectAdmin() {
  location.replace("/admin.html")
}

function redirectCoordinator() {
  location.replace("/coordinator.html")
}

function logOut() {
  location.replace("/login.html")
}
