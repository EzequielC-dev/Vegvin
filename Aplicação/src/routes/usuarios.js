const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
  usuarioController.cadastrar(req, res);
});

router.post("/login", function (req, res) {
  usuarioController.login(req, res);
});

module.exports = router;
