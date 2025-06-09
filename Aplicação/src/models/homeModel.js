const database = require("../database/config");

function getUserPhoto(userId) {
  const sqlInstruction = `
    SELECT imagemPerfil AS 'imagem' FROM usuario WHERE idUsuario = ${userId};`;

  return database.executar(sqlInstruction);
}
module.exports = { getUserPhoto };
