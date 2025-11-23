var perfilModel = require("../models/perfilModel");

function obterKpi(req, res) {
    var usuario_id = req.params.usuario_id;

    perfilModel.obterKpi(usuario_id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterGrafico(req, res){
    var usuario_id = req.params.usuario_id;

    perfilModel.obterGrafico(usuario_id).then(function(resultado){
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    obterKpi,
    obterGrafico
}