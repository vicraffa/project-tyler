var database = require("../database/config");

function obterKpi(usuario_id){
    var instrucaoSql = `
        select * from exibirKpis
        where user = ${usuario_id};
    `;

    // console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterGrafico(usuario_id){
    var instrucaoSql = `
        select acertos, dtRegistro from tentativaQuestionario
        where usuario_id = ${usuario_id}
        order by acertos desc
        limit 5;
    `;

    // console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterKpi,
    obterGrafico
};