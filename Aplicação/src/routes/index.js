const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homeController");

router.get("/", function (req, res) {
  res.render("index");
});

router.post("/sendEmail", function (req, res) {
  homeController.sendEmail(req, res);
});

router.get("/getUserImage/:id", function (req, res) {
  homeController.getUserPhoto(req, res);
});

module.exports = router;
