function expanded() {
    const barra = document.querySelector('.principal-barra');
    const barraLegenda = document.querySelectorAll('.principal-barra-legenda');

    const menu = document.querySelector('#principal-barra-menu');

    barra.addEventListener("click", () => {
        barra.classList.toggle("menu-ativo");
        if (menu.classList.contains("girar")) {
            menu.classList.remove("girar");
            menu.classList.add("voltar");
        } else {
            menu.classList.remove("voltar");
            menu.classList.add("girar");
        }

        barraLegenda.forEach((index) => {
            index.classList.toggle("legenda-ativa");
        })

    })
}

