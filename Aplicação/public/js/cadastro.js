function cadastrarUsuario() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const dtNasc = document.getElementById('data_nascimento').value;

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
        console.log(header);
    })
    .catch(() => {
        console.log("Deu erro");
    })
}