const database = require("../database/config");

function totalPosts(fk_usuario) {
    const sqlInstruction = `SELECT COUNT(*) AS 'total' FROM topico WHERE fk_usuario = ${fk_usuario};`;

    return database.executar(sqlInstruction);
}

function mostUsedCategory(fk_usuario) {
    const sqlInstruction = `SELECT (categoria) FROM topico WHERE fk_usuario = ${fk_usuario} GROUP BY topico.categoria ORDER BY COUNT(categoria) DESC LIMIT 1;`

    return database.executar(sqlInstruction);
}

module.exports = {
    totalPosts,
    mostUsedCategory
}