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
  const totalPosts = document.getElementById("user-totalPosts");

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
      totalPosts.innerHTML = `<h1>${json[0].total}</h1>`
    })
  })
  .catch((error) => {
    console.log("Erro ao pegar total de Posts do usuário", error);
  })
}

function mostUsedCategory() {
  const category = document.getElementById("user-mostUsedCategory");
  const userID = sessionStorage.userID;
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "Application/json"
    },    
    body: JSON.stringify({
      userID: userID
    })
  }

  fetch('http://localhost:3333/dashboard/mostUsedCategory', header)
  .then((result) => {
    result.json()
    .then((json) => {
      category.innerHTML = `<h1>${json[0].categoria}</h1>`
    })
  })
  .catch((error) => {
    console.log("Erro: não foi possível pegar a categoria mais usada", error);
  })

}

function historyPosts() {
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "Application/json"
    },
    body: JSON.stringify({
      userID: sessionStorage.userID
    })
  }

  fetch("http://localhost:3333/dashboard/historyPosts", header)
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
  })
  .then((data) => {
    divPosts = document.querySelector(".history-user-posts");

    console.log(data);

    data.forEach(post => {
      divPosts.innerHTML += `<div class="history-post-data"><a href="topic.html"><span class="history-post-span"><img src="../assets/icons/icon-topic.svg"><h3>${post.titulo}</h3></span> <p>Titulo: ${post.categoria}</p> <p>Data da Publicação: ${post.dataPublicacao.substring(0, 10)}</p></a></div>` 
    });
  })
  .catch((error) => {
    console.log("Está dando errado", error);
  })

}

window.addEventListener("DOMContentLoaded", totalPosts);
window.addEventListener("DOMContentLoaded", mostUsedCategory);
window.addEventListener("DOMContentLoaded", historyPosts);