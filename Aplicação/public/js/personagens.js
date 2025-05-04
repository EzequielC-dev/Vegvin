let personagensTexto = document.querySelector(".principal-navegacao-personagens-container");
let segundoPersonagensTexto = document.querySelector(".principal-dois-personagens-container");

const personagensElementos = {
    Thorfinn: `<div class="principal-personagens-navegacao"><button onclick="thorfinn()" class="thorfinn" id="ativo">thorfinn</button><button onclick=" thors()" class="thors">thors</button><button onclick="askeladd()" class="askleadd">askeladd</button><button onclick="canute()" class="canute">canute</button></div><div class="principal-personagens"><div class="principal-personagens-texto"><h2>Thorfinn</h2><p>Thorfinn é o protagonista da história. Filho de Thors, um guerreiro lendário que abandonou a vida de violência, Thorfinn cresce ouvindo histórias heroicas e acaba seguindo o pai em uma expedição, onde testemunha sua morte pelas mãos de Askeladd. Consumido pelo desejo de vingança, Thorfinn se junta ao bando de Askeladd, esperando a chance de desafiá-lo em um duelo justo. Ao longo dos anos, torna-se um guerreiro brutal, mas vazio. Após a morte de Askeladd, Thorfinn perde seu propósito e acaba escravizado. É durante sua vida como escravo que ele começa uma jornada de transformação, rejeitando a violência e buscando redenção ao tentar criar uma terra de paz, Vinland.</p></div><div class="principal-personagens-imagem"><img src="./assets/personagens/personagem-thorfinn.png"alt="Thorfinn"></div></div>`,
    Thors: `<div class="principal-personagens-navegacao"><button onclick="thorfinn()" class="thorfinn">thorfinn</button><button onclick=" thors()" class="thors" id="ativo">thors</button><button onclick="askeladd()" class="askleadd">askeladd</button><button onclick="canute()" class="canute">canute</button></div><div class="principal-personagens"><div class="principal-personagens-texto"><h2>Thors</h2><p>Thors é o pai de Thorfinn e uma figura lendária entre os vikings. Originalmente um guerreiro temido, ele abandona a violência ao perceber seu vazio, fingindo sua morte para viver uma vida pacífica com sua família. No entanto, seu passado o alcança, e ele aceita partir para proteger os seus. Mesmo diante do perigo, Thors recusa matar e tenta ensinar que "um verdadeiro guerreiro não precisa matar". Sua morte nas mãos de Askeladd marca profundamente Thorfinn e é o ponto de partida para os eventos da história, sendo também o modelo de homem que Thorfinn só entenderá verdadeiramente anos depois.</p></div><div class="principal-personagens-imagem"><img src="./assets/personagens/personagem-thors.png"alt="Thors"></div></div>`,
    Askeladd: `<div class="principal-personagens-navegacao"><button onclick="thorfinn()" class="thorfinn">thorfinn</button><button onclick=" thors()" class="thors">thors</button><button onclick="askeladd()" class="askleadd" id="ativo">askeladd</button><button onclick="canute()" class="canute">canute</button></div><div class="principal-personagens"><div class="principal-personagens-texto"><h2>Askeladd</h2><p>Askeladd é um mercenário astuto, cínico e manipulador, com origens mistas galesas e vikings. Apesar de suas ações brutais, ele demonstra uma visão estratégica e um certo idealismo escondido. Lidera o bando de guerreiros que mata Thors, e mantém Thorfinn por perto como uma ferramenta útil, embora entre os dois se desenvolva uma relação ambígua. Askeladd carrega um ódio profundo pelos vikings e um desejo secreto de proteger Gales. No clímax de sua história, ele sacrifica a própria vida para salvar o príncipe Canute e garantir que seu povo tenha uma chance de sobreviver.</p></div><div class="principal-personagens-imagem"><img src="./assets/personagens/personagem-askeladd.PNG"alt="Askeladd"></div></div>`,
    Canute: `<div class="principal-personagens-navegacao"><button onclick="thorfinn()" class="thorfinn">thorfinn</button><button onclick=" thors()" class="thors">thors</button><button onclick="askeladd()" class="askleadd">askeladd</button><button onclick="canute()" class="canute" id="ativo">canute</button></div><div class="principal-personagens"><div class="principal-personagens-texto"><h2>Canute</h2><p>Canute começa sua jornada como um príncipe tímido e extremamente religioso, constantemente protegido por Ragnar, seu fiel guardião. Inicialmente despreparado para a brutalidade da guerra, ele parece fraco e inseguro. No entanto, após a morte de Ragnar e outros traumas profundos, Canute passa por uma transformação radical. Ele abandona a ideia de um Deus que cuida de tudo e decide que a paz deve ser construída por mãos humanas. Com isso, se torna um rei ambicioso, determinado e até frio, disposto a usar manipulação, assassinato e estratégia política para criar um reino de "paz", mesmo que isso custe vidas. Seu crescimento mostra como o poder pode mudar uma pessoa — tanto no sentido de força quanto de sacrifício moral.</p></div><div class="principal-personagens-imagem"><img src="./assets/personagens/personagem-canute.png"alt="Canute"></div></div>`,
    Einar: `<div class="principal-personagens-navegacao"><button onclick="Einar()" id="ativo">einar</button><button onclick="Arnheid()">arnheid</button><button onclick="Bjorn()">bjorn</button><button onclick="Thorkell()">thorkell</button></div><div class="principal-personagens"><div class="principal-personagens-texto"><h2>Einar</h2><p>Einar é um camponês simples do norte da Inglaterra, cuja vida muda completamente após sua vila ser invadida por vikings. Ele vê sua mãe e irmã serem mortas e é vendido como escravo. Levado para a fazenda de Ketil, conhece Thorfinn, com quem desenvolve uma amizade profunda. Einar é emocional, honesto e resistente, representando o homem comum que sofre as consequências da guerra sem jamais desejá-la. Sua presença traz humanidade à história, sendo um contraste direto aos guerreiros endurecidos que o cercam. Ao longo do tempo, ele e Thorfinn trabalham juntos para comprar sua liberdade, e Einar o ajuda a encontrar um novo propósito longe da violência.</p></div><div class="principal-personagens-imagem"><img src="./assets/personagens/personagem-einar.png" alt="Einar"></div></div>`,
    Arnheid: `<div class="principal-personagens-navegacao"><button onclick="Einar()">einar</button><button onclick="Arnheid()" id="ativo">arnheid</button><button onclick="Bjorn()">bjorn</button><button onclick="Thorkell()">thorkell</button></div><div class="principal-personagens"><div class="principal-personagens-texto"><h2>Arnheid</h2><p>Arnheid é uma mulher escravizada na mesma fazenda que Einar e Thorfinn. Silenciosa e gentil, ela carrega uma tristeza profunda em seu olhar. Antes de ser escravizada, vivia livre com seu marido e filho, mas foi capturada durante uma invasão viking. Seu coração permanece com seu antigo lar, e quando descobre que seu marido ainda vive e tenta fugir com ele, sua história se torna uma das mais trágicas da série. Arnheid representa a dor silenciosa dos que foram arrancados de suas vidas por força, e sua trajetória revela como a escravidão destrói não apenas corpos, mas também esperanças. Seu destino deixa marcas profundas em Einar e Thorfinn.</p></div><div class="principal-personagens-imagem"><img src="./assets/personagens/personagem-arnheid.png" alt="Arnheid"></div></div>`,
    Bjorn: `<div class="principal-personagens-navegacao"><button onclick="Einar()">einar</button><button onclick="Arnheid()">arnheid</button><button onclick="Bjorn()" id="ativo">bjorn</button><button onclick="Thorkell()">thorkell</button></div><div class="principal-personagens"><div class="principal-personagens-texto"><h2>Bjorn</h2><p>Bjorn é o braço direito de Askeladd e um dos guerreiros mais brutais do bando de mercenários liderado por ele. De temperamento direto e selvagem, Bjorn se destaca por seu uso de cogumelos alucinógenos — possivelmente amanita muscaria — que o colocam em um estado de fúria quase incontrolável durante as batalhas, tornando-o ainda mais perigoso. Apesar de sua natureza violenta, Bjorn possui uma lealdade profunda e silenciosa por Askeladd, enxergando nele não apenas um líder, mas talvez o único amigo que teve em vida. Essa admiração é revelada de forma tocante em seus últimos momentos, quando, gravemente ferido, pede para duelarem.</p></div><div class="principal-personagens-imagem"><img src="./assets/personagens/personagem-bjorn.png" alt="Bjorn"></div></div>`,
    Thorkell: `<div class="principal-personagens-navegacao"><button onclick="Einar()">einar</button><button onclick="Arnheid()">arnheid</button><button onclick="Bjorn()">bjorn</button><button onclick="Thorkell()" id="ativo">thorkell</button></div><div class="principal-personagens"><div class="principal-personagens-texto"><h2>Thorkell</h2><p>Thorkell, o Alto, é um dos guerreiros mais fortes e temidos da série, além de ser tio de Thors. Apesar de ser extremamente brutal em batalha, ele ama a luta de forma quase infantil — vê a guerra como um jogo emocionante. É carismático, imprevisível e muitas vezes cômico, mesmo sendo mortalmente perigoso. Thorkell respeita profundamente guerreiros que têm força verdadeira e honra no combate. Ele representa o lado mais exagerado, mas também tradicional, da cultura guerreira viking. Por trás de sua força absurda, existe uma admiração real por pessoas como Thors e, mais tarde, Thorfinn, por suas convicções e coragem.</p></div><div class="principal-personagens-imagem"><img src="./assets/personagens/personagem-thorkell.png" alt="Thorkell"></div></div>
    `
}

function mudarTexto(personagem) {
    const personagemData = personagensTexto.hasAttribute("data-primeiro");

    if(personagemData === true) {
        personagensTexto.innerHTML = personagensElementos[personagem];
    }
    else {
        // Não faça nada;
    }
}

function mudarSegundoTexto(personagem) {
    const personagemData = segundoPersonagensTexto.hasAttribute("data-segundo");

    if(personagemData === true) {
        segundoPersonagensTexto.innerHTML = personagensElementos[personagem];
    }   
    else {
        // Não faça nada;
    }
}

function thorfinn() {
    mudarTexto("Thorfinn");
}

function thors() {
    mudarTexto("Thors");
}

function askeladd() {
    mudarTexto("Askeladd");
}

function canute() {
    mudarTexto("Canute");
}

function Einar() {
    mudarSegundoTexto("Einar");
}

function Arnheid() {
    mudarSegundoTexto("Arnheid");
}

function Bjorn() {
    mudarSegundoTexto("Bjorn");
}

function Thorkell() {
    mudarSegundoTexto("Thorkell");
}