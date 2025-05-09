function loginUsuario() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const header = {
        method: 'POST',
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({
            email: email,
            senha: senha
        })
    }

    fetch("usuarios/login", header)
    .then((resposta) => {

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;

                    function usuarioLogado() {
                        window.location = '../historia.html';
                    }
                    usuarioLogado();
                });

            }
    })
    .catch((erro) => {
        console.log("Erro:", erro);
    })
}