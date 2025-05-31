const contadores = {
  "primeira-imagem": 1,
  "segunda-imagem": 1,
  "terceira-imagem": 1,
  "quarta-imagem": 1,
};

function mudarImagem(idImagem, caminhoBase) {
  const background = document.getElementById(idImagem);
  let contador = contadores[idImagem];

  if (contador == 1) {
    background.setAttribute("src", `${caminhoBase}.png`);
  } else if (contador == 2) {
    background.setAttribute("src", `${caminhoBase}(2).png`);
  } else if (contador == 3) {
    background.setAttribute("src", `${caminhoBase}(3).png`);
    contador = 0;
  }

  if (idImagem == "primeira-imagem" && contador == 2) {
    background.style.filter = `brightness(80%)`;
  } else {
    background.style.filter = ``;
  }

  contadores[idImagem] = contador + 1;
}

function primeiraParte() {
  mudarImagem("primeira-imagem", "./assets/historia/primeira-parte-vinland");
}

function segundaParte() {
  mudarImagem("segunda-imagem", "./assets/historia/segunda-parte-vinland");
}

function terceiraParte() {
  mudarImagem("terceira-imagem", "./assets/historia/terceira-parte-vinland");
}

function quartaParte() {
  mudarImagem("quarta-imagem", "./assets/historia/quarta-parte-vinland");
}
