const express = require("express");
const router = express.Router();

const topicController = require("../controllers/topicController");

router.get("/viewTopic", function (req, res) {
  topicController.viewTopic(req, res);
});

module.exports = router;
