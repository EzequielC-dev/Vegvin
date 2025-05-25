const database = require("../database/config");

function totalPosts(fk_usuario) {
    const sqlInstruction = `SELECT COUNT(*) AS 'total' FROM topico WHERE fk_usuario = ${fk_usuario};`;

    return database.executar(sqlInstruction);
}

module.exports = {
    totalPosts
}