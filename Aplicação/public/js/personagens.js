const personagensNavegacao = document.querySelector(".principal-personagens-navegacao");

let personagensTexto = document.querySelector(".principal-personagens-1");
let segundoPersonagensTexto = document.querySelector(".principal-personagens-2");

const personagensElementos = {
    Thorfinn: `<div class="principal-personagens-texto-1"><h2>Thorfinn</h2><p>Thorfinn é o protagonista da história. Filho de Thors, um guerreiro lendário que abandonou a vida de violência, Thorfinn cresce ouvindo histórias heroicas e acaba seguindo o pai em uma expedição, onde testemunha sua morte pelas mãos de Askeladd. Consumido pelo desejo de vingança, Thorfinn se junta ao bando de Askeladd, esperando a chance de desafiá-lo em um duelo justo. Ao longo dos anos, torna-se um guerreiro brutal, mas vazio. Após a morte de Askeladd, Thorfinn perde seu propósito e acaba escravizado. É durante sua vida como escravo que ele começa uma jornada de transformação, rejeitando a violência e buscando redenção ao tentar criar uma terra de paz, Vinland.</p></div><div class="principal-personagens-imagem"><img src="./assets/personagens/personagem-thorfinn.png" alt="Thorfinn"></div>`,
    Askeladd: `<div class="principal-personagens-texto-1"><h2>Askeladd</h2><p>Askeladd é um mercenário astuto, cínico e manipulador, com origens mistas galesas e vikings. Apesar de suas ações brutais, ele demonstra uma visão estratégica e um certo idealismo escondido. Lidera o bando de guerreiros que mata Thors, e mantém Thorfinn por perto como uma ferramenta útil, embora entre os dois se desenvolva uma relação ambígua. Askeladd carrega um ódio profundo pelos vikings e um desejo secreto de proteger Gales. No clímax de sua história, ele sacrifica a própria vida para salvar o príncipe Canute e garantir que seu povo tenha uma chance de sobreviver.</p></div><div class="principal-personagens-imagem"><img src="./assets/personagens/personagem-askeladd.PNG" alt="Askeladd"></div>`,
    Canute: `<div class="principal-personagens-texto-1"><h2>Canute</h2><p>Canute começa sua jornada como um príncipe tímido e extremamente religioso, constantemente protegido por Ragnar, seu fiel guardião. Inicialmente despreparado para a brutalidade da guerra, ele parece fraco e inseguro. No entanto, após a morte de Ragnar e outros traumas profundos, Canute passa por uma transformação radical. Ele abandona a ideia de um Deus que cuida de tudo e decide que a paz deve ser construída por mãos humanas. Com isso, se torna um rei ambicioso, determinado e até frio, disposto a usar manipulação, assassinato e estratégia política para criar um reino de "paz", mesmo que isso custe vidas. Seu crescimento mostra como o poder pode mudar uma pessoa — tanto no sentido de força quanto de sacrifício moral.</p></div><div class="principal-personagens-imagem"><img src="./assets/personagens/personagem-canute.png" alt="Canute"></div>`,
    Einar: `Einar`,
    Arnheid: `Arnheid`,
    Leif: `Leif`, 
    Thorkell: `Thorkell`,
    Thors: `<div class="principal-personagens-texto-1"><h2>Thors</h2><p>Thors é o pai de Thorfinn e uma figura lendária entre os vikings. Originalmente um guerreiro temido, ele abandona a violência ao perceber seu vazio, fingindo sua morte para viver uma vida pacífica com sua família. No entanto, seu passado o alcança, e ele aceita partir para proteger os seus. Mesmo diante do perigo, Thors recusa matar e tenta ensinar que "um verdadeiro guerreiro não precisa matar". Sua morte nas mãos de Askeladd marca profundamente Thorfinn e é o ponto de partida para os eventos da história, sendo também o modelo de homem que Thorfinn só entenderá verdadeiramente anos depois.</p></div><div class="principal-personagens-imagem"><img src="./assets/personagens/personagem-thors.png" alt="Thors"></div>`
}

function mudarTextoPersonagem1(Texto) {
    personagensTexto.innerHTML = personagensElementos[Texto];
}

function mudarTextoPersonagem2(Texto) {
    segundoPersonagensTexto.innerHTML = personagensElementos[Texto];
}

function thorfinn() {
    mudarTextoPersonagem1("Thorfinn");

}

function thors() {
    mudarTextoPersonagem1("Thors");
}

function askeladd() {
    mudarTextoPersonagem1("Askeladd");
}

function canute() {
    mudarTextoPersonagem1("Canute");
}

function Einar() {
    mudarTextoPersonagem2("Einar");
}

function Arnheid() {
    mudarTextoPersonagem2("Arnheid")
}

function Leif() {
    mudarTextoPersonagem2("Leif");
}

function Thorkell() {
    mudarTextoPersonagem2("Thorkell");
}

function Thors() {
    mudarTextoPersonagem2("Thors");
}