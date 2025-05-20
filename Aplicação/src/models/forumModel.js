const database = require("../database/config");

function viewTopics() {
    const sqlInstruction = `SELECT * FROM topico LIMIT 5`;

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