const settingModel = require('../models/settingModel');

function updateName(req, res) {
    const name = req.body.name;
    const email = req.body.email;

    if(name == undefined) {
        res.status(204).send("O nome está indefinido!");
    }
    else  {
        settingModel.updateName(name, email)
        .then(result => {
            if(result) {
                res.status(200).send("Nome alterado com sucesso");
            }
            else {
                console.log('Erro na requisição', result);
            }
        })
        .catch((error) => {
            console.log('Erro:', error);
        })
    }
}

function updatePassword(req, res) {
    const password = req.body.password;
    const email = req.body.email;

    if(password == undefined) {
        res.status(400).send("A senha está indefinida!");
    }
    else {
        settingModel.updatePassword(password, email)
            .then((result) => {
                if(result) {
                    res.status(200).send("Senha alterada com sucesso");
                }
                else {
                    console.log('Erro na requisição', result);
                }
            })
            .catch((error) => {
                console.log("Erro:", error);
            })
    }
}

function updateEmail(req, res) {
    const email = req.body.email;
    const oldEmail = req.body.sessionEmail;

    if(email == undefined) {
        res.status(400).send("O email está indefinido!");
    }
    else {
        settingModel.updateEmail(email, oldEmail) 
        .then((result) => {
            if(result) {
                res.status(200).send("Email alterado com sucesso");
            }
            else {
                res.status(400).send("Email está indefinido!");
            }
        })
        .catch((error) => {
            console.log("Erro:", error);
        })
    }

}

function updateDate(req, res) {
    const date = req.body.date;
    const email = req.body.email;

    if(date == undefined) {
        res.status(400).send("A data está indefinida!");
    }
    else {
        settingModel.updateDate(date, email)
            .then((result) => {
                if(result) {
                    res.status(200).send("Data de Nascimento alterada com sucesso");
                }
                else {
                    res.status(400).send("Data de Nascimento está indefinida!");
                }
            })
            .catch((error) => {
                console.log("Erro:", error);
            });
    }
}

module.exports = {
    updateName,
    updatePassword,
    updateEmail,
    updateDate
}