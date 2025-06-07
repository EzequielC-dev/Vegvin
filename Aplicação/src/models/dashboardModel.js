const database = require("../database/config");

function totalPosts(fk_usuario) {
  const sqlInstruction = `SELECT COUNT(*) AS 'total' FROM topico WHERE fk_usuario = ${fk_usuario};`;

  return database.executar(sqlInstruction);
}

function mostUsedCategory(fk_usuario) {
  const sqlInstruction = `SELECT (categoria) FROM topico WHERE fk_usuario = ${fk_usuario} GROUP BY topico.categoria ORDER BY COUNT(categoria) DESC LIMIT 1;`;

  return database.executar(sqlInstruction);
}

function historyPosts(id_usuario) {
  const sqlInstruction = `
    SELECT topico.titulo, topico.categoria, topico.dataPublicacao FROM topico 
    JOIN usuario ON idUsuario = fk_usuario WHERE fk_usuario = ${id_usuario} ORDER BY idTopico DESC LIMIT 6;
    `;

  return database.executar(sqlInstruction);
}

function viewCategoriesDashboard(id_usuario) {
  sqlInstruction = ` 
        SELECT c.categoria, COUNT(t.idTopico) AS quantidade FROM 
            (SELECT 'geral' AS categoria
            UNION ALL SELECT 'arcos-e-personagens'
            UNION ALL SELECT 'filosofia'
            UNION ALL SELECT 'teorias'
            UNION ALL SELECT 'artes') AS c
                LEFT JOIN 
                topico t ON t.categoria = c.categoria AND t.fk_usuario = ${id_usuario}
        GROUP BY 
        c.categoria;
    `;

  return database.executar(sqlInstruction);
}

function viewWeeklyPosts(id_usuario) {
  sqlInstruction = `
        SELECT dias.DiaSemana AS 'Dia', IFNULL(qtd.Quantidade, 0) AS 'Quantidade'
            FROM (SELECT 1 AS DiaSemana UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7
            ) AS dias
        LEFT JOIN (
            SELECT DAYOFWEEK(t.dataPublicacao) AS DiaSemana,
            COUNT(*) AS Quantidade
        FROM topico t
        WHERE fk_usuario = ${id_usuario}
        GROUP BY DAYOFWEEK(t.dataPublicacao)) AS qtd ON dias.DiaSemana = qtd.DiaSemana ORDER BY dias.DiaSemana;`;

  return database.executar(sqlInstruction);
}

module.exports = {
  totalPosts,
  mostUsedCategory,
  historyPosts,
  viewCategoriesDashboard,
  viewWeeklyPosts,
};
