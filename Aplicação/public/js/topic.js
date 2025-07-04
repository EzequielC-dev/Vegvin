const params = window.location.search;
const id = params.substring(1);
const buttonAddComment = document.getElementById("button-add-comment");

function openTopicPage() {
  const header = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(`http://localhost:3333/forum/openTopicPage/${id}`, header)
    .then((result) => {
      const topicClicked = document.getElementById("topic");

      if (result.ok) {
        result.json().then((topic) => {
          topicClicked.innerHTML = `
          <section class="topic-comment-title">
            <div class="topic-user">
                <span>
                    <img src="./assets/users-images/${topic[0].imagem}">
                    <p>${topic[0].username} (${topic[0].email})</p>
                </span>
                <p>${topic[0].data.substring(0, 10)}</p>
            </div>
            <div class="comment-info">
                <p>Categoria: ${topic[0].categoria}</p>
                <div id="comment-title-quantity">
                  <h1>${topic[0].titulo}</h1>

                  <span>
                    <img src="./assets/icons/icon-comment.svg" alt="Icon Comment">
                    <p id="answers-quantity"><p>
                  </span>
                </div>
            </div>
          </section>
          
          `;
        });
      }
    })
    .catch((error) => {
      console.log("Erro: Não foi possível fazer a requisição", error);
    });
}

function countAnswers() {
  fetch(`http://localhost:3333/topic/countAnswers/${id}`)
    .then((result) => {
      if (result.ok) {
        result.json().then((json) => {
          const paragraph = document.getElementById("answers-quantity");

          if (json[0].lenght == 0) {
            paragraph.innerHTML = "0";
          } else {
            paragraph.innerHTML = `${json[0].respostas}`;
          }
        });
      }
    })
    .catch((error) => {
      Toastify({
        text: "Erro: não foi possível contar os comentários!",
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
    });
}

function viewComments() {
  const header = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(`http://localhost:3333/topic/viewComments/${id}`, header)
    .then((result) => {
      if (result.ok) {
        const sectionComments = document.getElementById("topic-comments");
        result.json().then((comments) => {
          comments.forEach((comment) => {
            console.log(comment);
            if (comment.comentarioImagem != "null") {
              sectionComments.innerHTML += `
              <div class="user-comment">
                    <span>
                        <img src="/assets/users-images/${comment.imagem}"
                            alt="Icon User Image">
                        <p>${comment.username} (${comment.email})</p>
                    </span>
                    <p>${comment.comentarioTexto}</p>
                    <img src="./assets/users-images/${comment.comentarioImagem}">
                </div>
            `;
            } else {
              sectionComments.innerHTML += `
              <div class="user-comment">
                    <span>
                        <img src="/assets/users-images/${comment.imagem}"
                            alt="Icon User Image">
                        <p>${comment.username} (${comment.email})</p>
                    </span>
                    <p>${comment.comentarioTexto}</p>
                </div>
            `;
            }
          });
        });
      }
    })
    .catch(() => {
      Toastify({
        text: "Erro: não foi possível ver os comentários!",
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
    });
}

function addComment() {
  if (
    sessionStorage.userID == undefined ||
    sessionStorage.userName == undefined ||
    sessionStorage.userEmail == undefined
  ) {
    Toastify({
      text: "Erro: somente usuários cadastrados podem comentar!",
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
    const commentInput = document.getElementById("input_comment").value;
    const commentPhoto = document.getElementById("input_file");

    if (commentPhoto.files[0] != undefined) {
      const formData = new FormData();
      formData.append("userID", sessionStorage.userID);
      formData.append("topicID", id);
      formData.append("comment", commentInput);
      formData.append("photo", commentPhoto.files[0]);

      const header = {
        method: "POST",
        body: formData,
      };

      fetch("http://localhost:3333/topic/addComment", header)
        .then(() => {
          Toastify({
            text: "Comentário adicionado com sucesso",
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

          setTimeout(() => {
            window.location.reload();
          }, 1500);
        })
        .catch(() => {
          Toastify({
            text: "Erro: não foi possível adicionar comentário!",
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
        });
    } else {
      const header = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: sessionStorage.userID,
          topicId: id,
          comment: commentInput,
        }),
      };

      fetch("http://localhost:3333/topic/addCommentWithoutImage", header)
        .then(() => {
          Toastify({
            text: "Comentário adicionado com sucesso",
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
        })
        .catch(() => {
          Toastify({
            text: "Erro: não foi possível adicionar comentário!",
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
        });
    }
  }
}

window.addEventListener("DOMContentLoaded", openTopicPage);
window.addEventListener("DOMContentLoaded", countAnswers);
window.addEventListener("DOMContentLoaded", viewComments);
buttonAddComment.addEventListener("click", addComment);
