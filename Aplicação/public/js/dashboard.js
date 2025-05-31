const category = document.getElementById("container-chart-category");
const post = document.getElementById("container-chart-post");

const user = document.getElementById("a-user");
const email = document.getElementById("a-email");
const birthday = document.getElementById("a-birthday");
const userBirthday = sessionStorage.userBirthday;

user.innerHTML = sessionStorage.userName;
email.innerHTML = sessionStorage.userEmail;
birthday.innerHTML = userBirthday.substring(0, 10);

function totalPosts() {
  const totalPosts = document.getElementById("user-totalPosts");

  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID: sessionStorage.userID,
    }),
  };

  fetch("http://localhost:3333/dashboard/totalPosts", header)
    .then((result) => {
      result.json().then((json) => {
        totalPosts.innerHTML = `<h1>${json[0].total}</h1>`;
      });
    })
    .catch((error) => {
      console.log("Erro ao pegar total de Posts do usuário", error);
    });
}

function mostUsedCategory() {
  const category = document.getElementById("user-mostUsedCategory");
  const userID = sessionStorage.userID;
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({
      userID: userID,
    }),
  };

  fetch("http://localhost:3333/dashboard/mostUsedCategory", header)
    .then((result) => {
      result.json().then((json) => {
        category.innerHTML = `<h1>${json[0].categoria}</h1>`;
      });
    })
    .catch((error) => {
      console.log("Erro: não foi possível pegar a categoria mais usada", error);
    });
}

function historyPosts() {
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({
      userID: sessionStorage.userID,
    }),
  };

  fetch("http://localhost:3333/dashboard/historyPosts", header)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      divPosts = document.querySelector(".history-user-posts");

      data.forEach((post) => {
        divPosts.innerHTML += `<div class="history-post-data"><a href="topic.html"><span class="history-post-span"><img src="../assets/icons/icon-topic.svg"><h3>${
          post.titulo
        }</h3></span> <p>Titulo: ${
          post.categoria
        }</p> <p>Data da Publicação: ${post.dataPublicacao.substring(
          0,
          10
        )}</p></a></div>`;
      });
    })
    .catch((error) => {
      console.log("Erro: não foi possível pegar os posts", error);
    });
}

function viewCategoriesDashboard() {
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID: sessionStorage.userID,
    }),
  };

  fetch("http://localhost:3333/dashboard/viewCategoriesDashboard", header)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      new Chart(category, {
        type: "bar",
        data: {
          labels: ["geral", "arcos", "filosofia", "teorias", "artes"],
          datasets: [
            {
              label: "Números de Posts",
              data: [
                data[0].quantidade,
                data[1].quantidade,
                data[2].quantidade,
                data[3].quantidade,
                data[4].quantidade,
              ],
              borderWidth: 1,
              backgroundColor: "#361E05",
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    })
    .catch((error) => {
      console.log("Não foi possível fazer a requisição", error);
    });
}

function viewWeeklyPosts() {
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: sessionStorage.userID,
    }),
  };

  fetch("http://localhost:3333/dashboard/viewWeeklyPosts", header)
    .then((result) => {
      if (result.ok) {
        result.json().then((json) => {
          new Chart(post, {
            type: "line",
            data: {
              labels: [
                "Domingo",
                "Segunda",
                "Terça",
                "Quarta",
                "Quinta",
                "Sexta",
                "Sábado",
              ],
              datasets: [
                {
                  label: "Quantidade do dia",
                  data: [
                    json[0].Quantidade,
                    json[1].Quantidade,
                    json[2].Quantidade,
                    json[3].Quantidade,
                    json[4].Quantidade,
                    json[5].Quantidade,
                    json[6].Quantidade,
                  ],
                  borderWidth: 5,
                  backgroundColor: "#361E05",
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
        });
      }
    })
    .catch((error) => {
      console.log("Não foi possível fazer a requisição", error);
    });
}

window.addEventListener("DOMContentLoaded", totalPosts);
window.addEventListener("DOMContentLoaded", mostUsedCategory);
window.addEventListener("DOMContentLoaded", historyPosts);
window.addEventListener("DOMContentLoaded", viewCategoriesDashboard);
window.addEventListener("DOMContentLoaded", viewWeeklyPosts);
