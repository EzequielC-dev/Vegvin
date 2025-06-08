function getCategories() {
  const header = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("http://localhost:3333/topic/getCategories", header)
    .then((response) => {
      if (response.ok) {
        const categoriesList = document.getElementById("categories-list");

        response.json().then((categories) => {
          categories.forEach((category) => {
            categoriesList.innerHTML += `
                <div class="category-informations">
                    <span>${category.categoria}</span>
                    <p>${category.quantidade} posts</p>
                </div>
            `;
          });
        });
      }
    })
    .catch((error) => {
      Toastify({
        text: "Erro: não foi possível pegar categorias!",
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

window.addEventListener("DOMContentLoaded", getCategories);
