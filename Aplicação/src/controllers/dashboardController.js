const dashboardModel = require("../models/dashboardModel");

function totalPosts(req, res) {
    const userId = req.body.userID;

    if(userId == undefined) {
        res.status(500).send("Seu ID do usuário está como indefinido!");
    }
    else {
        dashboardModel.totalPosts(userId)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(500).send("Erro: não foi possível pegar o total de posts", error);
        })
    }
}

module.exports = {
    totalPosts
}