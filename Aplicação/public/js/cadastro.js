const buttonRegister = document.getElementById("cadastrar");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const user = {
  username: "",
  email: "",
  password: "",
  birthday: "",
};

function cadastrarUsuario() {
  const username = user.username;
  const email = user.email;
  const senha = user.password;
  const dtNasc = user.birthday;
  const photo = document.getElementById("photo");

  if (username.includes(" ")) {
    Toastify({
      text: "Erro: Espaços não são permitidos no Username!",
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
  } else if (
    username.includes("@") ||
    username.includes("#") ||
    username.includes("$") ||
    username.includes("%") ||
    username.includes("&") ||
    username.includes("*") ||
    username.includes("!")
  ) {
    Toastify({
      text: "Erro: Caracteres especiais não são permitidos no Username!",
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
  } else if (!email.includes("@")) {
    Toastify({
      text: "Erro: Por favor, coloque '@' no seu email!",
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
  } else if (!email.endsWith(".com")) {
    Toastify({
      text: "Erro: Por favor, termine seu e-mail com finais válidos! Só aceitamos finais com: .com",
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
  } else if (senha.length > 30 || senha.length < 4) {
    alert(
      Toastify({
        text: "Erro: Por favor, digite uma senha mais segura ou com menos de 30 caracteres!",
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
      }).showToast()
    );
  } else if (dtNasc == "") {
    Toastify({
      text: "Erro: Por favor, coloque uma data de nascimento!",
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
  } else if (photo.files[0].length === 0) {
    Toastify({
      text: "Erro: Por favor, insira uma foto de perfil!",
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
    const formData = new FormData();
    formData.append("photo", photo.files[0]);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", senha);
    formData.append("birthday", dtNasc);

    const header = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    };

    fetch("/usuarios/cadastrar", header)
      .then((res) => {
        if (res.ok) {
          Toastify({
            text: "Cadastro realizado com sucesso!",
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
            window.location = "../login.html";
          }, 1000);
        } else {
          Toastify({
            text: "Erro: E-mail já cadastrado!",
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
        }
      })
      .catch(() => {
        Toastify({
          text: "Erro: cadastro não realizado!",
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
      });
  }
}

function uploadPart() {
  user.username = document.getElementById("username").value;
  user.email = document.getElementById("email").value;
  user.password = document.getElementById("senha").value;
  user.birthday = document.getElementById("data_nascimento").value;

  const firstPart = document.querySelector(".first-part");
  const secondPart = document.querySelector(".second-part");
  firstPart.style.display = "none";
  secondPart.style.display = "flex";

  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", oldText);
}

function oldText() {
  const firstPart = document.querySelector(".first-part");
  const secondPart = document.querySelector(".second-part");
  firstPart.style.display = "flex";
  secondPart.style.display = "none";
}

buttonRegister.addEventListener("click", cadastrarUsuario);
nextButton.addEventListener("click", uploadPart);
backButton.addEventListener("click", oldText);
