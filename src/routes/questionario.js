var express = require("express");
var router = express.Router();

var questionarioController = require("../controllers/questionarioController");

router.post("/tentativa", function (req, res) {
    questionarioController.registrarTentativa(req, res);
});

router.get("/ranking", function (req, res) {
    questionarioController.listarRanking(req, res);
});

module.exports = router;