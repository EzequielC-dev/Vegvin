const user = document.getElementById("a-name");
const email = document.getElementById("a-email");

user.innerHTML = sessionStorage.userName;
email.innerHTML = sessionStorage.userEmail;
