var database = require("../database/config")

function autenticar(nickname, senha) {
    var instrucaoSql = `
        SELECT id, nickname, email FROM usuario WHERE nickname = '${nickname}' AND senha = '${senha}';
    `;
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nickname, email, senha) {
    var instrucaoSql = `
        INSERT INTO usuario (nickname, email, senha) VALUES ('${nickname}', '${email}', '${senha}');
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};