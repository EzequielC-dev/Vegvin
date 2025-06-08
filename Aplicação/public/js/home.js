const principalPrevia = principal_previa;
const containerName = document.getElementById("container-name");
const todayDate = document.getElementById("today-date");
const dateComplete = {
  day: new Date().getDate(),
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
};
const sendEmailButton = document.getElementById("send-email");

if (
  sessionStorage.userEmail != undefined &&
  sessionStorage.userName != undefined
) {
  const username = sessionStorage.getItem("userName");
  containerName.innerHTML = username;
}

function historia() {
  principalPrevia.innerHTML = `<div>
                <div class="principal-previa-navegacao">
                    <button id="ativo" onclick="historia()" id="ativo">
                        HISTÓRIA
                    </button>
                    <button onclick="personagem()">
                        PERSONAGENS
                    </button>
                    <button onclick="forum()">
                        FÓRUM
                    </button>
                    <button onclick="vegvin()">
                        VEGVIN
                    </button>
                </div>

                <div class="principal-previa-texto">
                    <h2>Primeira Temporada</h2>
                    <p>A história se passa na Era dos Vikings, um período marcado por guerras, conquistas e traições.
                        Seguimos
                        Thorfinn, um jovem guerreiro islandês que cresce em meio à brutalidade dos campos de batalha.
                        Movido
                        por
                        um desejo profundo de vingança, ele se junta a um grupo de mercenários e acaba se envolvendo em
                        conflitos políticos entre reinos, especialmente na Inglaterra. A temporada combina ação intensa,
                        cenas
                        épicas de combate e uma narrativa que, além da violência, explora temas como honra, orgulho e o
                        ciclo do
                        ódio.
                    </p>

                    <h2>Segunda Temporada</h2>
                    <p>
                        Já a segunda temporada muda bastante o ritmo e o foco. Com uma abordagem mais reflexiva, ela
                        mostra
                        Thorfinn em uma nova fase da vida, onde é forçado a confrontar seu passado e repensar quem ele
                        é. É
                        uma temporada marcada pelo crescimento pessoal, pela busca de paz e por diálogos mais profundos
                        sobre liberdade, redenção e o verdadeiro significado da força.
                    </p>

                    <button>VER MAIS</button>
                </div>
            </div>

            <div class="principal-previa-imagem">
                <img src="./assets/home/banner-historia.png" alt="Banner História">
            </div>`;
}

function personagem() {
  principalPrevia.innerHTML = `<div>
                <div class="principal-previa-navegacao">
                    <button onclick="historia()">
                        HISTÓRIA
                    </button>
                    <button onclick="personagem()" id="ativo">
                        PERSONAGENS
                    </button>
                    <button onclick="forum()">
                        FÓRUM
                    </button>
                    <button onclick="vegvin()">
                        VEGVIN
                    </button>
                </div>

                <div class="principal-previa-texto">
                    <h2>Thorfinn</h2>
                    <p>Thorfinn é o protagonista de Vinland Saga. Ele é um jovem guerreiro que, ao longo da história,
                        passa por uma transformação muito profunda. No começo, ele é movido por sentimentos muito
                        fortes, como raiva e vingança, mas o grande tema da jornada dele é o amadurecimento — ele
                        precisa descobrir quem ele realmente quer ser em um mundo cheio de guerra e violência.
                    </p>

                    <h2>Askeladd</h2>
                    <p>Askeladd é um personagem extremamente complexo. Ele é inteligente, estrategista e muito
                        carismático. Embora pareça cruel em alguns momentos, ele também tem motivações bem profundas e
                        uma visão de mundo que vai ficando mais clara conforme a história avança. Ele é uma figura meio
                        ambígua: às vezes você o vê como vilão, outras vezes quase como um mentor.
                    </p>

                    <button>VER MAIS</button>
                </div>
            </div>

            <div class="principal-previa-imagem">
                <img src="./assets/home/banner-personagens-2.jpg" alt="Banner Personagens">
            </div>`;
}

function forum() {
  principalPrevia.innerHTML = `            <div>
                <div class="principal-previa-navegacao">
                    <button onclick="historia()">
                        HISTÓRIA
                    </button>
                    <button onclick="personagem()">
                        PERSONAGENS
                    </button>
                    <button onclick="forum()" id="ativo">
                        FÓRUM
                    </button>
                    <button onclick="vegvin()">
                        VEGVIN
                    </button>
                </div>

                <div class="principal-previa-texto">
                    <h2>Fórum</h2>
                    <p>Um fórum é um espaço online onde pessoas se reúnem para conversar sobre assuntos em comum.
                        Funciona como uma grande sala de debates: alguém cria um tópico (um tema específico) e outros
                        usuários vão respondendo, trocando ideias, dúvidas, teorias ou experiências. É organizado para
                        que as conversas fiquem acessíveis e possam continuar por muito tempo.
                    </p>

                    <h2>Para que serve?</h2>
                    <p>Nesse fórum, os participantes podem analisar personagens como Thorfinn e Askeladd, debater
                        episódios e capítulos, criar teorias sobre os rumos da narrativa, compartilhar fanarts, memes e
                        notícias relacionadas, além de recomendar obras semelhantes.
                    </p>

                    <button>VER MAIS</button>
                </div>
            </div>

            <div class="principal-previa-imagem">
                <img src="./assets/home/banner-forum.jpg" alt="Banner Fórum">
            </div>`;
}

function vegvin() {
  principalPrevia.innerHTML = `
                    <div>
                <div class="principal-previa-navegacao">
                    <button onclick="historia()">
                        HISTÓRIA
                    </button>
                    <button onclick="personagem()">
                        PERSONAGENS
                    </button>
                    <button onclick="forum()">
                        FÓRUM
                    </button>
                    <button onclick="vegvin()" id="ativo">
                        VEGVIN
                    </button>
                </div>

                <div class="principal-previa-texto">
                    <h2>Vegvin</h2>
                    <p>Este projeto, foi feito com o intuito de tentar fazer as pessoas serem melhores. Eu, pessoalmente
                        acredito que pessoas podem mudar, pessoas podem se tornar melhores. Algo mal pode virar algo
                        bom, onde existe raiva pode existir amor.
                        Thorfinn é um exemplo de arrependimento e redenção, e este projeto busca justamente isso, que
                        pessoas possam rever suas atitudes e pensar um pouco.
                    </p>
                    <p>
                        Thorfinn: <i>"Eu me pergunto, pessoas podem realmente mudar? O que precisa se fazer pra mudar?
                        </i><br>
                        <br>

                        Einar: <i>Você costumava a ser um guerreiro, não?</i> <br>
                        <br>

                        Thorfinn: <i>Hum? Sim.</i> <br>
                        <br>

                        Einar: <i>E guerreiros são homens destemidos que carregam seus machados, vão para a guerra e
                            pilham, certo?
                            Olhe para si mesmo, nenhuma pessoa imaginaria que você já foi um guerreiro, sabia?
                        </i> <br>

                        <i>Pessoas podem mudar, você, provavelmente, está no meio de uma transição para uma
                            pessoa
                            melhor."
                        </i>
                    </p>
                </div>
            </div>

            <div class="principal-previa-imagem">
                <img src="./assets/home/banner-vegvin.png" alt="Banner Vegvin">
            </div>
    `;
}

function sendEmail() {
  const email = document.getElementById("user-email").value;
  const subject = document.getElementById("user-subject").value;

  if (email == "" || subject == "") {
    Toastify({
      text: "Erro: por favor, preencha as informações necessárias!",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#000",
        color: "#EFB135",
      },
    }).showToast();
  } else {
    const header = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailUser: email,
        text: subject,
      }),
    };

    fetch("http://localhost:3333/sendEmail", header)
      .then((response) => {
        if (response.ok) {
          Toastify({
            text: "Email enviado com sucesso!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "#000",
              color: "#EFB135",
            },
          }).showToast();
        }
      })
      .catch(() => {
        Toastify({
          text: "Erro: não foi possível enviar o e-mail!",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#000",
            color: "#EFB135",
          },
        }).showToast();
      });
  }
}

todayDate.innerHTML = `${dateComplete.day}/${dateComplete.month}/${dateComplete.year}`;
sendEmailButton.addEventListener("click", sendEmail);
