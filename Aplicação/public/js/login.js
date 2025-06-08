const buttonLogin = document.getElementById("login");
buttonLogin.addEventListener("click", loginUsuario);

function loginUsuario() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!email.includes("@")) {
    alert("Erro: Por favor, coloque '@' no seu email!");
  } else if (!email.endsWith(".com")) {
    alert(
      "Erro: Por favor, termine seu e-mail com finais válidos! Só aceitamos finais com: .com"
    );
  } else if (senha.length > 30 || senha.length < 4) {
    alert(
      "Erro: Por favor, digite uma senha mais segura ou com menos de 30 caracteres"
    );
  } else {
    const header = {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        email: email,
        senha: senha,
      }),
    };

    fetch("http://localhost:3333/usuarios/login", header)
      .then((resposta) => {
        if (resposta.ok) {
          Toastify({
            text: "Login realizado com sucesso!",
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

          resposta.json().then((json) => {
            sessionStorage.userID = json.userID;
            sessionStorage.userEmail = json.email;
            sessionStorage.userName = json.username;
            sessionStorage.userBirthday = json.dtNasc;
            sessionStorage.setItem("userTheme", "light");

            setTimeout(() => {
              window.location.href = "../index.html";
            }, 1000);
          });
        } else {
          Toastify({
            text: "Erro: não foi possível fazer Login!",
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
      .catch((erro) => {
        Toastify({
          text: "Erro na sua requisição!",
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
        console.log("Erro:", erro);
      });
  }
}
