var database = require("../database/config");

function registrarMensagem(id, mensagem) {
    var instrucaoSql = `
        INSERT INTO chat(usuario_id, mensagem) VALUES
        (${id}, '${mensagem}');`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function exibirMensagens() {
//     var instrucaoSql = `
//         SELECT nickname, mensagem
//         FROM usuario
//         JOIN chat on usuario.id = usuario_id;;
//         `;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    // exibirMensagens,
    registrarMensagem
};
