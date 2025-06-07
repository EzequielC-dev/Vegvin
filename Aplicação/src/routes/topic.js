const express = require("express");
const router = express.Router();

const topicController = require("../controllers/topicController");

router.post("/addComment", function (req, res) {
  topicController.addComment(req, res);
});

module.exports = router;
