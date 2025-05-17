const createTopic = document.getElementById("create-topic");
const containerTopic = document.querySelector('.principal-create-topic ');
const topicClose = document.querySelector(".topic-close");

const blurElements = [ 
  document.querySelector('.principal-forum'),
  document.querySelector('.principal-navegacao-forum'),
  document.querySelector('.cabecalho'),
  document.querySelector('.rodape')
];


function verifyUser() {
  if(sessionStorage.userName == undefined || sessionStorage.userEmail == undefined) {
  Toastify({
                    text: "Erro: somente usuários cadastrados podem criar tópicos!",
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
  else {
    for(i = 0; i < blurElements.length; i++) {
      blurElements[i].style.filter = "blur(10px)";
    }

      containerTopic.style.visibility = "visible";
  }
}
createTopic.addEventListener('click', verifyUser);

function closeTopic() {
  const divTopic = document.querySelector(".principal-create-topic");

  divTopic.style.visibility = "hidden";

  for(i = 0; i < blurElements.length; i++) {
    blurElements[i].style.filter = "blur(0px)"; 
  }
}
topicClose.addEventListener('click', closeTopic);