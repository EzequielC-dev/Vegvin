function loginUsuario() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if(!email.includes('@')) {
        alert("Erro: Por favor, coloque '@' no seu email!");
    }
    else if(!email.endsWith('.com')) {
        alert("Erro: Por favor, termine seu e-mail com finais válidos! Só aceitamos finais com: .com");
    }
    else if(senha.length > 30 || senha.length < 4) {
        alert("Erro: Por favor, digite uma senha mais segura ou com menos de 30 caracteres");
    }
    else {
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
                if(resposta.ok) {
                    alert("Login Realizado com Sucesso!");
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
}