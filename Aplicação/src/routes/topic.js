const express = require("express");
const router = express.Router();

const topicController = require("../controllers/topicController");

router.get("/viewComments/:id", function (req, res) {
  topicController.viewComments(req, res);
});

router.post("/addComment", function (req, res) {
  topicController.addComment(req, res);
});

module.exports = router;
