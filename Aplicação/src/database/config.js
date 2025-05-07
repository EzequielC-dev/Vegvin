const mysql = require("mysql2");

const mySqlConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
};

function executar(instrucao) {

    if (process.env.AMBIENTE_PROCESSO !== "producao" && process.env.AMBIENTE_PROCESSO !== "desenvolvimento") {
        console.log("O ambiente (produção ou desenvolvimento) não foi definido no .env ou no env.devm ou no app.js, por favor, verifique");
        return Promise.reject("Ambiente não foi configurado no .env");
    }

    return new Promise(function (resolve, reject) {
        const conexao = mysql.createConnection(mySqlConfig);
        conexao.connect();
        conexao.query(instrucao, function (erro, resultados) {
            conexao.end();
            if (erro) {
                reject(erro);
            }
            console.log(resultados);
            resolve(resultados);
        });
        conexao.on('error', function (erro) {
            return ("Erro no MySQL:", erro.sqlMessage);
        });
    });
}

module.exports = {
    executar
};