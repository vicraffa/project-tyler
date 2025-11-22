var express = require("express");
var router = express.Router();

var chatController = require("../controllers/chatController");

router.post("/comentar", function (req, res) {
    chatController.registrarMensagem(req, res);
});

router.get("/mensagens", function (req, res) {
    chatController.exibirMensagem()(req, res);
});

module.exports = router;