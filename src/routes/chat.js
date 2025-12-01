var express = require("express");
var router = express.Router();

var chatController = require("../controllers/chatController");

router.get("/listar", function (req, res) {
  chatController.listar(req, res);
});

router.post("/publicar/:usuario_id", function (req, res) {
  chatController.publicar(req, res);
});

module.exports = router;
