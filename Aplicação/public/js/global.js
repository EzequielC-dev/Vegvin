const noAuth = document.querySelectorAll(".no-auth");
const auth = document.querySelectorAll(".auth");
const leave = document.getElementById("leave");

function expanded() {
  const barra = document.querySelector(".principal-barra");
  const barraLegenda = document.querySelectorAll(".principal-barra-legenda");
  const menu = document.querySelector("#principal-barra-menu");

  barra.addEventListener("click", () => {
    barra.classList.toggle("menu-ativo");
    if (menu.classList.contains("girar")) {
      menu.classList.remove("girar");
      menu.classList.add("voltar");
    } else {
      menu.classList.remove("voltar");
      menu.classList.add("girar");
    }

    barraLegenda.forEach((index) => {
      index.classList.toggle("legenda-ativa");
    });
  });
}

if (
  sessionStorage.userEmail != undefined &&
  sessionStorage.userName != undefined
) {
  noAuth.forEach((element) => {
    element.style.display = "none";
  });
  auth.forEach((element) => {
    element.setAttribute("style", "display: flex !important");
  });
}

window.onload = () => {
  const theme = sessionStorage.getItem("userTheme");
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

function logout() {
  sessionStorage.removeItem("userEmail");
  sessionStorage.removeItem("userName");
  sessionStorage.removeItem("userTheme");
  sessionStorage.removeItem("userID");
  sessionStorage.removeItem("userBirthday");

  auth.forEach((element) => {
    element.style.display = "none";
  });
}

leave.addEventListener("click", logout);
