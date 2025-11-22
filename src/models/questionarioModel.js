var database = require("../database/config");

function listarRanking(){
    var instrucaoSql = `
        SELECT * FROM rankingTentativas;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarTentativa(id, certas, erradas){
    var instrucaoSql = `
        INSERT INTO tentativaQuestionario(usuario_id, acertos, erros) VALUES
    (${id}, ${certas}, ${erradas});`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarRanking,
    registrarTentativa
};