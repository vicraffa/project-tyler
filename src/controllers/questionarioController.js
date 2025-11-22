var questionarioModel = require("../models/questionarioModel");

function listarRanking(req, res){
    questionarioModel.listarRanking().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function registrarTentativa(req, res){
    var certas = req.body.certasServer;
    var erradas = req.body.erradasServer;
    var id = req.body.idServer;

    if(certas == undefined){
        res.status(400).send("Certas está undefined");
    }else if(erradas == undefined){
        res.status(400).send("Erradas está undefined");
    }else if( id == undefined){
        res.status(400).send("ID do usuário está undefined");
    }

    questionarioModel.registrarTentativa(id, certas, erradas).then(function (){
        res.status(200).send("Tentativa registrada com sucesso.");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listarRanking,
    registrarTentativa
}