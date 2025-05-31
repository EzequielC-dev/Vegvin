const dashboardModel = require("../models/dashboardModel");

function totalPosts(req, res) {
  const userId = req.body.userID;

  if (userId == undefined) {
    res.status(500).send("Seu ID do usuário está como indefinido!");
  } else {
    dashboardModel
      .totalPosts(userId)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res
          .status(500)
          .send("Erro: não foi possível pegar o total de posts", error);
      });
  }
}

function mostUsedCategory(req, res) {
  const userId = req.body.userID;

  if (userId == undefined) {
    res.status(500).send("Seu ID do usuário está como indefinido!");
  } else {
    dashboardModel
      .mostUsedCategory(userId)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res
          .status(500)
          .send("Erro: não foi possível pegar a categoria mais usada", error);
      });
  }
}

function historyPosts(req, res) {
  const userId = req.body.userID;

  if (userId == undefined) {
    res.status(500).send("Seu ID do usuário está como indefinido");
  } else {
    dashboardModel
      .historyPosts(userId)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res
          .status(500)
          .send("Erro: não foi possível pegar o histórico de posts", error);
      });
  }
}

function viewCategoriesDashboard(req, res) {
  const userId = req.body.userID;

  if (userId == undefined) {
    res.status(500).send("Seu UserID está como indefinido!");
  } else {
    dashboardModel
      .viewCategoriesDashboard(userId)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        console.log("Erro: não foi possível pegar as categorias", error);
      });
  }
}

module.exports = {
  totalPosts,
  mostUsedCategory,
  historyPosts,
  viewCategoriesDashboard,
};
