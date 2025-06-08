const buttonRegister = document.getElementById("cadastrar");
const nextButton = document.getElementById("next-button");
const user = {
  username: "",
  email: "",
  password: "",
  birthday: "",
};

function cadastrarUsuario() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const dtNasc = document.getElementById("data_nascimento").value;

  if (username.includes(" ")) {
    alert("Erro: Espaços não são permitidos no Username!");
  } else if (
    username.includes("@") ||
    username.includes("#") ||
    username.includes("$") ||
    username.includes("%") ||
    username.includes("&") ||
    username.includes("*") ||
    username.includes("!")
  ) {
    alert("Erro: Caracteres especiais não são permitidos no Username!");
  } else if (!email.includes("@")) {
    alert("Erro: Por favor, coloque '@' no seu email!");
  } else if (!email.endsWith(".com")) {
    alert(
      "Erro: Por favor, termine seu e-mail com finais válidos! Só aceitamos finais com: .com"
    );
  } else if (senha.length > 30 || senha.length < 4) {
    alert(
      "Erro: Por favor, digite uma senha mais segura ou com menos de 30 caracteres"
    );
  } else if (dtNasc == "") {
    alert("Erro: Por favor, coloque uma data de nascimento!");
  } else {
    const header = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        senha: senha,
        data_nascimento: dtNasc,
      }),
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

  const principalRegisterText = document.querySelector(
    ".principal-cadastro-texto"
  );

  principalRegisterText.innerHTML = `
                     <p>Foto de Perfil</p>
                    <input type="file" id="photo">
                    <button id="back-button">< Anterior</button>
  
  `;
  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", oldText);
}

function oldText() {
  const userPhoto = document.getElementById("photo").value;
  console.log(userPhoto);

  const principalRegisterText = document.querySelector(
    ".principal-cadastro-texto"
  );

  principalRegisterText.innerHTML = `
                    <p>Username</p>
                    <input type="text" id="username" placeholder="thorfinn" value="${user.username}">

                    <p>Email</p>
                    <input type="text" id="email" placeholder="einar@gmail.com" value="${user.email}">

                    <p>Senha</p>
                    <input type="password" id="senha" placeholder="thorfinn123" value="${user.password}">

                    <p>Data de nascimento</p>
                    <input type="date" id="data_nascimento" value="${user.birthday}">

                    <button id="next-button">Próximo ></button>`;

  const nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", uploadPart);
}

buttonRegister.addEventListener("click", cadastrarUsuario);
nextButton.addEventListener("click", uploadPart);
