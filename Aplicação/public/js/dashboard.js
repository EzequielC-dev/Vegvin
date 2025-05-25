const category = document.getElementById("container-chart-category");
const post = document.getElementById("container-chart-post");

const user = document.getElementById("a-user");
const email = document.getElementById("a-email");
const birthday = document.getElementById("a-birthday");
const userBirthday = sessionStorage.userBirthday;

user.innerHTML = sessionStorage.userName;
email.innerHTML = sessionStorage.userEmail;
birthday.innerHTML = userBirthday.substring(0, 10);

 new Chart(category, {
    type: 'bar',
    data: {
      labels: ['geral', 'arcos', 'personagens', 'filosofia', 'teorias', 'artes'],
      datasets: [{
        label: 'Categorias Mais Utilizadas',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: '#361E05'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

   new Chart(post, {
    type: 'line',
    data: {
      labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      datasets: [{
        label: 'Posts Semanais',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: '#361E05'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

function totalPosts() {
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify({
      userID: sessionStorage.userID
    })
  }

  fetch('http://localhost:3333/dashboard/totalPosts', header) 
  .then((result) => {
    result.json()
    .then((json) => {
      console.log(json[0].total);
    })
  })
  .catch((error) => {
    console.log("Erro ao pegar total de Posts do usuário", error);
  })
}

window.addEventListener("DOMContentLoaded", totalPosts);