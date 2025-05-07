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
    .then(() => {
        console.log("Deu bom");
    })
    .catch(() => {
        console.log("Deu ruim");
    })
}