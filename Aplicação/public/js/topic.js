const params = window.location.search;
const id = params.substring(1);

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
          console.log(topic);
          topicClicked.innerHTML = `
          
          <div class="topic-comment-title">
            <span>
                <h1>${topic[0].titulo}</h1>
                <p>${topic[0].data.substring(0, 10)}</p>
            </span>

          </div>
          
          `;
        });
      }
    })
    .catch((error) => {
      console.log("Erro: Não foi possível fazer a requisição", error);
    });
}

window.addEventListener("DOMContentLoaded", openTopicPage);
