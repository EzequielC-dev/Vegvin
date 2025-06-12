const user = document.querySelectorAll(".a-name");
const email = document.querySelectorAll(".a-email");
const buttonUpdate = document.querySelector(".save-button");
const darkButton = document.getElementById("box-dark");

let contTheme = 0;

if (sessionStorage.userTheme != "light") {
  contTheme = 1;
}

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
  const updatePhone = document.querySelector("#update-phone").value;
  const updateCPF = document.querySelector("#update-cpf").value;
  const updateAdress = document.querySelector("#update-adress").value;

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

  if (
    updatePhone.length > 1 &&
    updateCPF.length > 1 &&
    updateAdress.length > 1
  ) {
    if (updateCPF.length != 11) {
      Toastify({
        text: "Erro: Por favor, insira o CPF com 11 digítos!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#000",
          color: "#EFB135",
        },
      }).showToast();
    } else {
      const header = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: sessionStorage.userID,
          adress: updateAdress,
          CPF: updateCPF,
          phone: updatePhone,
        }),
      };

      fetch("http://localhost:3333/setting/updatePersonalData", header)
        .then((result) => {
          result
            .json()
            .then(() => {
              Toastify({
                text: "Dados pessoais inseridos com sucesso!",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "#000",
                  color: "#EFB135",
                },
              }).showToast();
            })
            .catch(() => {
              Toastify({
                text: "Erro: não foi possível inserir os dados pessoais",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "#000",
                  color: "#EFB135",
                },
              }).showToast();
            });
        })
        .catch(() => {
          Toastify({
            text: "Erro: não foi possível fazer a requisição",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "#000",
              color: "#EFB135",
            },
          }).showToast();
        });
    }
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

function userImage() {
  const userImage = document.getElementById("user-image");
  const id = sessionStorage.userID;

  const header = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(`http://localhost:3333/getUserImage/${id}`, header)
    .then((result) => {
      result.json().then((photo) => {
        userImage.setAttribute(
          "src",
          `./assets/users-images/${photo[0].imagem}`
        );
      });
    })
    .catch((error) => {
      Toastify({
        text: "Erro: não foi possível pegar a foto do usuário",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#000",
          color: "#EFB135",
        },
      }).showToast();
    });
}

darkButton.addEventListener("click", switchTheme);
buttonUpdate.addEventListener("click", updateData);
window.addEventListener("DOMContentLoaded", userImage);
