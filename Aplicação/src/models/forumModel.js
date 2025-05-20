const database = require("../database/config");

function postTopic(titulo, categoria) {
    const sqlInstruction = `
        INSERT INTO topico (titulo, categoria) VALUES ('${titulo}', '${categoria}');`
    return database.executar(sqlInstruction);
}

module.exports = {
    postTopic
}