const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

const usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", upload.single("photo"), (req, res) => {
  usuarioController.cadastrar(req, res);
});

router.post("/login", (req, res) => {
  usuarioController.login(req, res);
});

module.exports = router;
