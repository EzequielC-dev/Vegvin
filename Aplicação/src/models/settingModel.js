const database = require(`../database/config`)

function updateName(newName, email) {
    const sqlInstruction = `
        UPDATE usuario SET username = '${newName}' WHERE email = '${email}';
    `;

    return database.executar(sqlInstruction);
}

function updatePassword(newPassword, email) {
    const sqlInstruction = `UPDATE usuario SET senha = '${newPassword}' WHERE email = '${email}'`;

    return database.executar(sqlInstruction);
}

function updateEmail(newEmail, email) {
    const sqlInstruction = `UPDATE usuario SET email = '${newEmail}' WHERE email = '${email}'`;

    return database.executar(sqlInstruction);
}

function updateDate(newDate, email) {
    const sqlInstruction = `UPDATE usuario SET dtNasc = '${newDate}' WHERE email = '${email}'`;

    return database.executar(sqlInstruction);
}

module.exports = {
    updateName,
    updatePassword,
    updateEmail,
    updateDate
}