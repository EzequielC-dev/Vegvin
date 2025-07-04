const forumModel = require("../models/forumModel");

function viewTopics(req, res) {
  forumModel
    .viewTopics()
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      }
    })
    .catch((error) => {
      res.status(400).send("Não foi possível ver os tópicos", error);
    });
}

function postTopic(req, res) {
  const title = req.body.title;
  const category = req.body.category;
  const userID = req.body.userID;

  if (title == undefined || category == undefined || userID == undefined) {
    return res
      .status(204)
      .send("Seu título ou categoria está como indefinido!");
  } else {
    forumModel
      .postTopic(title, category, userID)
      .then((result) => {
        if (result) {
          res.status(200).send("O tópico foi inserido");
        } else {
          console.log(`Resultados: ${result}`);
        }
      })
      .catch((error) => {
        console.log(`Erro: ${error}`);
      });
  }
}

function topUsersPosts(req, res) {
  forumModel
    .topUsersPosts()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send("Não foi possível ver o Top Usuários", error);
    });
}

function opentTopicPage(req, res) {
  const topicID = req.params.id;

  forumModel
    .openTopicPage(topicID)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).send("Não foi possível abrir os comentários", error);
    });
}

module.exports = {
  postTopic,
  viewTopics,
  topUsersPosts,
  opentTopicPage,
};
