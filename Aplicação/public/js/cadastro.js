const buttonRegister = document.getElementById('cadastrar');
buttonRegister.addEventListener('click', cadastrarUsuario);

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
        .then((res) => {
            if(res.ok) {
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
                    background: '#EFB135',
                    color: '#361E05',    
                },
                }).showToast();

                setTimeout(() => {
                    window.location = "../login.html";
                }, 1000);

            }
            else {
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
                        background: '#EFB135',
                        color: '#361E05',    
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
                    background: '#EFB135',
                    color: '#361E05',    
                },
            }).showToast();
        })
    }
}