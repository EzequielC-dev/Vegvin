    function carregarUsuario() {
        const userEmail = sessionStorage.getItem('userEmail');

        if (userEmail == undefined) {
            window.location.href = "login.html";
        }
        else {
            const spanNome = document.querySelector('#nomeUsuario');

            spanNome.innerHTML = userEmail;
        }

    }

