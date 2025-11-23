var chatModel = require("../models/chatModel");

function listar(req, res) {
    chatModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os chats: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function publicar(req, res) {
    var mensagem = req.body.mensagem;
    var usuario_id = req.params.usuario_id;

    if (mensagem == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (usuario_id == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        chatModel.publicar(mensagem, usuario_id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    listar,
    publicar
}