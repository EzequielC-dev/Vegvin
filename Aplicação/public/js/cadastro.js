function cadastrarUsuario() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const dtNasc = document.getElementById('data_nascimento').value;

    if(username.includes(" ")) {
        alert("Erro: Espaços não são permitidos no Username!");
    }
    else if(username.includes('@') || username.includes('#') || username.includes('$') ||
            username.includes('%') || username.includes('&') || username.includes('*') ||
            username.includes('!')
    ) {
        alert("Erro: Caracteres especiais não são permitidos no Username!");
    }
    else if(!email.includes('@')) {
        alert("Erro: Por favor, coloque '@' no seu email!");
    }
    else if(!email.endsWith('.com')) {
        alert("Erro: Por favor, termine seu e-mail com finais válidos! Só aceitamos finais com: .com");
    }
    else if(senha.length > 30 || senha.length < 4) {
        alert("Erro: Por favor, digite uma senha mais segura ou com menos de 30 caracteres");
    }
    else if(dtNasc == "") {
        alert("Erro: Por favor, coloque uma data de nascimento!");
    }
    else {
        const header = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                senha: senha,
                data_nascimento: dtNasc
            })
        }

        fetch('/usuarios/cadastrar', header)
        .then(() => {
            alert("Cadastro realizado com sucesso!");
            window.location = "../login.html";
        })
        .catch(() => {
            console.log("Deu erro");
        })
    }
}