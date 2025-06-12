const database = require("../database/config");

function viewComments(idTopic) {
  const sqlInstruction = `
    SELECT comentarioTexto, comentarioImagem, username, email, imagemPerfil AS 'imagem' FROM comentario 
      JOIN usuario ON fk_usuario = idUsuario 
    WHERE fk_topicos = ${idTopic} ORDER BY idComentario DESC;`;

  return database.executar(sqlInstruction);
}

function countAnswers(idTopic) {
  const sqlInstruction = `
    SELECT COUNT(*) AS 'respostas' FROM comentario WHERE fk_topicos = ${idTopic};
  `;

  return database.executar(sqlInstruction);
}

function addComment(comment, commentPhoto, fkTopic, fkUser) {
  const sqlInstruction = `
    INSERT INTO comentario(comentarioTexto, comentarioImagem, fk_topicos, fk_usuario) VALUES 
	  ('${comment}', '${commentPhoto}', ${fkTopic}, ${fkUser});
  `;

  return database.executar(sqlInstruction);
}

function getCategories() {
  const sqlInstruction = `
    SELECT categoria, COUNT(*) AS 'quantidade' FROM topico GROUP BY categoria;
  `;

  return database.executar(sqlInstruction);
}

module.exports = {
  addComment,
  countAnswers,
  viewComments,
  getCategories,
};
