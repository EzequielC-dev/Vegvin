let primeiroContador = 1;
let segundoContador = 1;
let terceiroContador = 1;
let quartoContador = 1;

function primeiraParte() {

    const background = document.getElementById("primeira-imagem");

    if(primeiroContador == 1) {
        background.setAttribute('src', '/public/assets/historia/primeira-parte-vinland.png');
    }
    else if(primeiroContador == 2) {
        background.setAttribute('src', '/public/assets/historia/primeira-parte-vinland(2).png');
        background.style.filter = `brightness(80%)`;
    }
    else if(primeiroContador == 3) {
        background.setAttribute('src', '/public/assets/historia/primeira-parte-vinland(3).png');

        primeiroContador = 0;
    }
    primeiroContador++;
}

function segundaParte() {
    const background = document.getElementById("segunda-imagem");

    if(segundoContador == 1) {
        background.setAttribute('src', '/public/assets/historia/segunda-parte-vinland.png');
    }
    else if(segundoContador == 2) {
        background.setAttribute('src', '/public/assets/historia/segunda-parte-vinland(2).png');
    }
    else if(segundoContador == 3) {
        background.setAttribute('src', '/public/assets/historia/segunda-parte-vinland(3).png');

        segundoContador = 0;
    }

    segundoContador ++;
}

function terceiraParte() {
    const background = document.getElementById("terceira-imagem");

    if(terceiroContador == 1) {
        background.setAttribute('src', './assets/historia/terceira-parte-vinland.png');
    }
    else if(terceiroContador == 2) {
        background.setAttribute('src', '/public/assets/historia/terceira-parte-vinland(2).png');
    }
    else if(terceiroContador == 3) {
        background.setAttribute('src', '/public/assets/historia/terceira-parte-vinland(3).png');

        terceiroContador = 0;
    }

    terceiroContador++;
}

function quartaParte() {
    const background = document.getElementById("quarta-imagem");

    if(quartoContador == 1) {
        background.setAttribute('src', '/public/assets/historia/quarta-parte-vinland.png');
    }
    else if(quartoContador == 2) {
        background.setAttribute('src', './assets/historia/quarta-parte-vinland(2).png');
    }
    else if(quartoContador == 3) {
        background.setAttribute('src', '/public/assets/historia/quarta-parte-vinland(3).png');

        quartoContador = 0;
    }

    quartoContador++;
}