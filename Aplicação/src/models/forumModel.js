const database = require("../database/config");

function viewTopics() {
    const sqlInstruction = `SELECT * FROM topico ORDER BY idTopico DESC LIMIT 10;`;

    return database.executar(sqlInstruction);
}

function postTopic(titulo, categoria) {
    const sqlInstruction = `
        INSERT INTO topico (titulo, categoria) VALUES ('${titulo}', '${categoria}');`
    return database.executar(sqlInstruction);
}

module.exports = {
    postTopic,
    viewTopics
}