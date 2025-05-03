const personagensNavegacao = document.querySelector(".principal-personagens-navegacao");

let personagensTexto = document.querySelector(".principal-personagens-texto");
let segundoPersonagensTexto = document.querySelector(".principal-personagens-2");

const personagensElementos = {
    Thorfinn: `Thorfinn`,
    Askeladd: `Askeladd`,
    Canute: `Canute`,
    Einar: `Einar`,
    Arnheid: `Arnheid`,
    Leif: `Leif`, 
    Thorkell: "Thorkell",
    Thors: "Thors"
}

function mudarTextoPersonagem(Texto) {
    personagensTexto.innerHTML = personagensElementos[Texto];

    if(Texto === "Thors" ) {
        const personagem = document.querySelector(".thors");
        personagem.setAttribute("id", "ativo");
    }
    else {
        personagem.setAttribute("id", "none");
    }
}

function thorfinn() {
    mudarTextoPersonagem("Thorfinn");

}

function thors() {
    mudarTextoPersonagem("Thors");
}

function askeladd() {
    mudarTextoPersonagem("Askeladd");
}

function canute() {
    mudarTextoPersonagem("Canute");
}

function einar() {
    mudarTextoPersonagem("Einar");
}

function Arnheid() {
    mudarTextoPersonagem("Arnheid")
}

function Leif() {
    mudarTextoPersonagem("Thorkell");
}

function Thors() {
    mudarTextoPersonagem("Thors");
}