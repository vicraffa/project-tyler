var chatModel = require("../models/chatModel");

function exibirMensagens(req, res){
    chatModel.exibirMensagens().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function registrarMensagem(req, res){
    var id = req.body.idServer;
    var mensagem = req.body.mensagemServer;

    
    chatModel.registrarMensagem(id, mensagem).then(function (){
        res.status(200).send("Tentativa registrada com sucesso.");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    exibirMensagens,
    registrarMensagem
}