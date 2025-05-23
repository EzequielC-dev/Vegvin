const database = require('../database/config');

function viewPost(idTopic) {
    const sqlInstruction = `SELECT * FROM Topico WHERE idTopico = ${idTopic};`;

    return database.executar(sqlInstruction);
}

module.exports = {
    viewPost,
}