const createTopic= document.getElementById("create-topic");

function verifyUser() {
  console.log("Bom dia");

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
}

createTopic.addEventListener('click', verifyUser)
