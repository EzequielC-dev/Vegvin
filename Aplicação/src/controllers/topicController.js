const topicModel = require("../models/topicModel");

function viewComments(req, res) {
  const id = req.params.id;

  if (id == "undefined") {
    res.status(500).send("O ID do tópico está como indefinido!");
  } else {
    topicModel
      .viewComments(id)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        console.log("Não foi possível pegar os comentários", error);
      });
  }
}

function addComment(req, res) {
  const fkUser = req.body.userID;
  const fkTopic = req.body.topicID;
  const commentContent = req.body.comment;

  if (
    fkTopic == undefined ||
    fkTopic == undefined ||
    commentContent == undefined
  ) {
    res
      .status(500)
      .send("Algumas das suas informações enviadas estão indefinidas!");
  } else {
    topicModel
      .addComment(commentContent, fkTopic, fkUser)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        console.log("Erro: não foi possível postar o comentário!", error);
      });
  }
}

module.exports = {
  addComment,
  viewComments,
};
