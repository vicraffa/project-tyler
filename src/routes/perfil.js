var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.get("/kpi/:usuario_id", function (req, res) {
  perfilController.obterKpi(req, res);
});

router.get("/grafico/:usuario_id", function (req, res) {
  perfilController.obterGrafico(req, res);
});

module.exports = router;
