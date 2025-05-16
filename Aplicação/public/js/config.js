const user = document.querySelectorAll(".a-name");
const email = document.querySelectorAll(".a-email");

user.forEach(index => {
    index.innerHTML = sessionStorage.userName;
});

email.forEach(index => {
    index.innerHTML = sessionStorage.userEmail;
});


// user.innerHTML = sessionStorage.userName;
// email.innerHTML = sessionStorage.userEmail;
