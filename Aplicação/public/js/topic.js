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
                    <img src="https://i.pinimg.com/736x/8e/cd/10/8ecd10ffbe03bf69eeebc2337037a71b.jpg">
                    <p>${topic[0].username} (${topic[0].email})</p>
                </span>
                <p>${topic[0].data.substring(0, 10)}</p>
            </div>
            <div class="comment-info">
                <p>${topic[0].categoria}</p>
                <h1>${topic[0].titulo}</h1>
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

function viewComments() {
  fetch(`http://localhost:3333/topic/viewComments/${id}`);
}

function addComment() {
  const commentInput = document.getElementById("input_comment").value;
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID: sessionStorage.userID,
      topicID: id,
      comment: commentInput,
    }),
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

window.addEventListener("DOMContentLoaded", openTopicPage);
buttonAddComment.addEventListener("click", addComment);
