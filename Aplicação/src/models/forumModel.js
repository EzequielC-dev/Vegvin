const database = require("../database/config");

function viewTopics() {
  const sqlInstruction = `SELECT * FROM topico JOIN usuario ON usuario.idUsuario = topico.fk_usuario ORDER BY idTopico DESC LIMIT 10;`;

  return database.executar(sqlInstruction);
}

function postTopic(titulo, categoria, fkUsuario) {
  const sqlInstruction = `
        INSERT INTO topico (titulo, categoria, fk_usuario) VALUES ('${titulo}', '${categoria}', ${fkUsuario});`;
  return database.executar(sqlInstruction);
}

module.exports = {
  postTopic,
  viewTopics,
};
