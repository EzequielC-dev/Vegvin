const database = require("../database/config");

function viewComments(idTopic) {
  const sqlInstruction = `
    SELECT comentarioTexto, username, email FROM comentario 
      JOIN usuario ON fk_usuario = idUsuario 
    WHERE fk_topicos = ${idTopic} ORDER BY idComentario DESC;`;

  return database.executar(sqlInstruction);
}

function addComment(comment, fkTopic, fkUser) {
  const sqlInstruction = `
    INSERT INTO comentario(comentarioTexto, fk_topicos, fk_usuario) VALUES 
	  ('${comment}', ${fkTopic}, ${fkUser});
  `;

  return database.executar(sqlInstruction);
}

module.exports = {
  addComment,
  viewComments,
};
