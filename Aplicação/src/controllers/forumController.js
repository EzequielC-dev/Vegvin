const forumModel = require("../models/forumModel");

function postTopic(req, res) {
    const title = req.body.title;
    const category = req.body.category;

    if(title == undefined || category == undefined) {
        return res.status(204).send("Seu título ou categoria está como indefinido!");
    }
    else {
        
        forumModel.postTopic(title, category)
        .then(result => {
            if(result) {
                res.status(200).send("O tópico foi inserido");
            }
            else {
                console.log(`Resultados: ${result}`);
            }
        })
        .catch((error) => {
            console.log(`Erro: ${error}`);
        })
    }
}

module.exports = {
    postTopic
}