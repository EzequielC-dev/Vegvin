const usuarioModel = require("../models/usuarioModel");

function login(req, res) {
    const email = req.body.email;
    const senha = req.body.senha;

    if (email == undefined) {
        res.status(204).send("Seu email está indefinido!");
    } else if (senha == undefined) {
        res.status(204).send("Sua senha está indefinida!");
    } else {

        usuarioModel.login(email, senha)
        .then((resultado) => {
            if(resultado.length == 1) {
                res.status(200).json(
                    {
                        username: resultado[0].username,
                        email: resultado[0].email,
                        senha: resultado[0].senha
                    }
                )
            }
            else {
                res.status(403).send("Usuário ou senha inválidos");
            }
        })
        .catch((erro) => {
            console.log("Erro:", erro);
        })
    }

}

function cadastrar(req, res) {

    const nome = req.body.username;
    const email = req.body.email;
    const senha = req.body.senha;
    const dtNasc = req.body.data_nascimento;

    if (nome == undefined) {
        res.status(400).send("Seu nome está indefinido!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está indefinido!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinido!");
    } else if (dtNasc == undefined) {
        res.status(400).send("Sua data de nascimento está indefinida");
    } else {

        usuarioModel.autenticar(email) 
        .then((resultado) => {
            if(resultado.length == 1) {
                res.status(403).send("Esse email já existe!");
                console.log("Esse e-mail já existe");
            }
            else if(resultado.length == 0) {

                usuarioModel.cadastrar(nome, email, senha, dtNasc)
                    .then(
                        function (resultado) {
                            res.json(resultado);
                        }
                    ).catch(
                        function (erro) {
                            console.log(erro);
                            console.log("Houve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                            res.status(500).json(erro.sqlMessage);
                        }
                    );
            }
            else {
                res.status(400).send("Não é possível a existência de dois e-mails")
            }
        })
        .catch((erro) => {
            console.log('Erro:', erro);
        })

    }
}

module.exports = {
    login,
    cadastrar
}