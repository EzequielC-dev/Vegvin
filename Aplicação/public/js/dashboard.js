const category = document.getElementById("container-chart-category");
const post = document.getElementById("container-chart-post");

const user = document.getElementById("a-user");
const email = document.getElementById("a-email");

user.innerHTML = sessionStorage.userName;
email.innerHTML = sessionStorage.userEmail;

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