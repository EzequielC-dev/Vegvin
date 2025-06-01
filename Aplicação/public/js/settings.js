const user = document.querySelectorAll(".a-name");
const email = document.querySelectorAll(".a-email");
const buttonUpdate = document.querySelector(".save-button");

const darkButton = document.getElementById("box-dark");
let contTheme = 0;

user.forEach((index) => {
  index.innerHTML = sessionStorage.userName;
});

email.forEach((index) => {
  index.innerHTML = sessionStorage.userEmail;
});

function updateData() {
  const updateName = document.querySelector("#update-name").value;
  const updateEmail = document.querySelector("#update-email").value;
  const updatePassword = document.querySelector("#update-password").value;
  const updateDtNasc = document.querySelector("#update-dtNasc").value;

  const sessionEmail = sessionStorage.userEmail;

  if (updateName.length > 1) {
    const header = {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        name: updateName,
        email: sessionEmail,
      }),
    };

    fetch("http://localhost:3333/setting/updateName", header)
      .then((response) => {
        if (response.ok) {
          Toastify({
            text: "Username alterado com sucesso!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "#EFB135",
              color: "#361E05",
            },
          }).showToast();

          setTimeout(() => {
            refreshNameUser(JSON.parse(header.body).name);
          }, 3000);
        } else {
          console.log("Erro na requisição", response);
        }
      })
      .catch((error) => {
        console.log("Erro na requisição:", error);
      });
  }

  if (updateEmail.length > 1) {
    const header = {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        email: updateEmail,
        sessionEmail: sessionEmail,
      }),
    };

    fetch("http://localhost:3333/setting/updateEmail", header)
      .then((response) => {
        console.log(header.body);
        if (response.ok) {
          Toastify({
            text: "Email alterado com sucesso!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "#EFB135",
              color: "#361E05",
            },
          }).showToast();

          setTimeout(() => {
            refreshEmailUser(JSON.parse(header.body).email);
          }, 3000);
        } else {
          console.log("Erro na requisição", response);
        }
      })
      .catch((error) => {
        console.log("Erro na requisição", error);
      });
  }

  if (updatePassword.length > 1) {
    const header = {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        password: updatePassword,
        email: sessionEmail,
      }),
    };

    fetch("http://localhost:3333/setting/updatePassword", header)
      .then((response) => {
        if (response.ok) {
          Toastify({
            text: "Senha alterada com sucesso!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "#EFB135",
              color: "#361E05",
            },
          }).showToast();
        } else {
          console.log("Erro na requisição", response);
        }
      })
      .catch((error) => {
        console.log("Erro na requisição", error);
      });
  }

  if (updateDtNasc.length > 1) {
    const header = {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        date: updateDtNasc,
        email: sessionEmail,
      }),
    };

    fetch("http://localhost:3333/setting/updateDate", header)
      .then((response) => {
        if (response.ok) {
          Toastify({
            text: "Data de Nascimento alterada com sucesso!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "#EFB135",
              color: "#361E05",
            },
          }).showToast();
        } else {
          console.log("Erro na requisição", response);
        }
      })
      .catch((error) => {
        console.log("Erro na requisição", error);
      });
  }
}

function refreshEmailUser(data) {
  sessionStorage.userEmail = data;
  window.location.reload();
}

function refreshNameUser(data) {
  sessionStorage.userName = data;
  window.location.reload();
}

function switchTheme() {
  contTheme++;
  document.body.classList.toggle("dark");
  sessionStorage.userTheme = "dark";

  if (contTheme >= 2) {
    sessionStorage.userTheme = "light";
    contTheme = 0;
  }
}

darkButton.addEventListener("click", switchTheme);
buttonUpdate.addEventListener("click", updateData);
