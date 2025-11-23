var database = require("../database/config");

function listar() {
    var instrucaoSql = `
        select nickname, mensagem, mensagem.id as id from mensagem
        join usuario on usuario.id = usuario_id
        order by mensagem.id;
    `;
    // console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(mensagem, usuario_id) {
    var instrucaoSql = `
        INSERT INTO mensagem ( mensagem, usuario_id) VALUES ('${mensagem}', ${usuario_id});
    `;
    // console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar,
    publicar
}
