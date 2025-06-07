const database = require("../database/config");

function addComment(comment, fkTopic, fkUser) {
  const sqlInstruction = `
    INSERT INTO comentario(comentarioTexto, fk_topicos, fk_usuario) VALUES 
	  ('${comment}', ${fkTopic}, ${fkUser});
  `;

  return database.executar(sqlInstruction);
}

module.exports = {
  addComment,
};
