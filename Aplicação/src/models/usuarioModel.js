const database = require("../database/config");

function login(email, senha) {
  const instrucaoSql = `
        SELECT idUsuario, username, email, dtNasc FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
  return database.executar(instrucaoSql);
}

function autenticar(email) {
  const instrucaoSql = `SELECT email FROM usuario WHERE email = '${email}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(username, email, senha, dtNasc) {
  const instrucaoSql = `
        INSERT INTO usuario (username, email, senha, dtNasc) VALUES ('${username}', '${email}', '${senha}', '${dtNasc}');
    `;
  return database.executar(instrucaoSql);
}

module.exports = {
  login,
  autenticar,
  cadastrar,
};
