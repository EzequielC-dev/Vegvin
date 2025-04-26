function expanded() {
    const menu = document.querySelector('.principal-barra');

    const home = document.querySelector('#principal-barra-home');
    const historia = document.querySelector('#principal-barra-historia');
    const personagens = document.querySelector('#principal-barra-personagens');
    const forum = document.querySelector('#principal-barra-forum');


    menu.addEventListener("click", () => {
        menu.classList.toggle("menu-ativo");
        if(menu.classList.contains("menu-ativo")) {
                    
        home.innerHTML += "<p>Home</p>"
        historia.innerHTML += "<p>História</p>"
        personagens.innerHTML += "<p>Personagens</p>"
        forum.innerHTML += "<p>Fórum</p>"
        }
        else {
        home.innerHTML = `<a href=""><img src="./assets/icons/icon-home.svg" alt="Home"></a> `; 
        historia.innerHTML = `<a href=""><img src="./assets/icons/icon-historia.svg" alt="História"></a>`;
        personagens.innerHTML = `<a href=""><img src="./assets/icons/icon-personagens.svg" alt="Personagens"></a>`;
        forum.innerHTML = ` <a href=""><img src="./assets/icons/icon-forum.svg" alt="Fórum"></a>`;
        }

    })
}

