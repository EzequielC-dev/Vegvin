const createTopic = document.getElementById("create-topic");
const containerTopic = document.querySelector(".principal-create-topic ");
const topicClose = document.querySelector(".topic-close");
const topicPostButton = document.getElementById("topic-post");

const blurElements = [
  document.querySelector(".principal-forum"),
  document.querySelector(".principal-navegacao-forum"),
  document.querySelector(".cabecalho"),
  document.querySelector(".rodape"),
];

function viewPosts() {
  fetch("http://localhost:3333/forum/viewTopics")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      const userPosts = document.querySelector(".principal-forum-comentarios");

      if (data.length == 0) {
        userPosts.innerHTML = `<div class="comentario">
                                <h1>Ainda não há posts!<h1>
                                <img src="././assets/forum/thorfinn-sad.jpg" alt="thorfinn sad" style="width: 100%; object-fit: cover; padding-top: 1rem">
                              <div>`;
      } else {
        data.forEach((post) => {
          const divPost = document.createElement("div");

          divPost.classList.add("comentario");
          divPost.setAttribute("id", `${post.idTopico}`);

          divPost.innerHTML = `<p class="categoria">${post.categoria}</p>`;
          divPost.innerHTML += `<div class="comentario-user"><img src="./assets/forum/default-image.jpg" alt="default-icon"><p>Usuário: ${post.username} (${post.email})</p></div>`;
          divPost.innerHTML += `<a href="topic.html?${post.idTopico}">${post.titulo}</a>`;
          userPosts.appendChild(divPost);
        });
      }
    })
    .catch((error) => {
      console.log("erro", error);
    });
}

function verifyUser() {
  if (
    sessionStorage.userName == undefined ||
    sessionStorage.userEmail == undefined
  ) {
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
        background: "#EFB135",
        color: "#361E05",
      },
    }).showToast();
  } else {
    for (i = 0; i < blurElements.length; i++) {
      blurElements[i].style.filter = "blur(10px)";
    }

    containerTopic.style.visibility = "visible";
  }
}

function closeTopic() {
  const divTopic = document.querySelector(".principal-create-topic");

  divTopic.style.visibility = "hidden";

  for (i = 0; i < blurElements.length; i++) {
    blurElements[i].style.filter = "blur(0px)";
  }
}

function postTopic() {
  const title = document.getElementById("topic-title").value;
  const category = document.getElementById("topic-category").value;
  const userID = sessionStorage.userID;

  const header = {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({
      title: title,
      category: category,
      userID: userID,
    }),
  };

  if (title == "" || category == "") {
    Toastify({
      text: "Erro: Não pode ter tópico ou categoria vazia!",
      duration: 2000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#EFB135",
        color: "#361E05",
      },
    }).showToast();
  } else {
    fetch("http://localhost:3333/forum/postTopic", header)
      .then((response) => {
        if (response.ok) {
          Toastify({
            text: "Tópico postado com sucesso!",
            duration: 1500,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "#EFB135",
              color: "#361E05",
            },
          }).showToast();

          setTimeout(() => {
            closeTopic();
            window.location.reload();
          }, 1500);
        } else {
          Toastify({
            text: "Houve um erro na tentativa de postar o tópico",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "#EFB135",
              color: "#361E05",
            },
          }).showToast();
        }
      })
      .catch((error) => {
        console.log(`Erro: ${error}`);
      });
  }
}

function topUsersPosts() {
  fetch("http://localhost:3333/forum/topUsersPosts")
    .then((result) => {
      if (result.ok) {
        result.json().then((top) => {
          let contador = 1;

          top.forEach((user) => {
            const topUsers = document.querySelector(".forum-top-usuarios");
            topUsers.innerHTML += `
                       <span>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBXQzrpIsvckkZTMv-bHzXiimED-8cG0RXg&s"
                                alt="Foto de Perfil Usuário">
                            <div>
                                <p><b>${contador}. ${user.email} </b></p>
                                <p>${user.Quantidade} posts</p>
                            </div>
                        </span>
            `;
            contador++;
          });
        });
      }
    })
    .catch((error) => {
      console.log("Erro, não foi possível pegar Top Usuários!", error);
    });
}

window.addEventListener("DOMContentLoaded", viewPosts);
window.addEventListener("DOMContentLoaded", topUsersPosts);
createTopic.addEventListener("click", verifyUser);
topicClose.addEventListener("click", closeTopic);
topicPostButton.addEventListener("click", postTopic);
