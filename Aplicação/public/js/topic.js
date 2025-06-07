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

function addComment() {
  const commentInput = document.getElementById("input_comment").value;
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      userID: sessionStorage.userID,
      comment: commentInput,
    },
  };

  fetch("http://localhost:3333/topic/addComment", header);
}

window.addEventListener("DOMContentLoaded", openTopicPage);
buttonAddComment.addEventListener("click", addComment);
