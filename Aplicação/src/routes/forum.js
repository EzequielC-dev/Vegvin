const express = require("express");
const router = express.Router();

const forumController = require("../controllers/forumController");

router.get("/viewTopics", function (req, res) {
  forumController.viewTopics(req, res);
});

router.get("/topUsersPosts", function (req, res) {
  forumController.topUsersPosts(req, res);
});

router.get("/openTopicPage/:id", function (req, res) {
  forumController.opentTopicPage(req, res);
});

router.post("/postTopic", function (req, res) {
  forumController.postTopic(req, res);
});

module.exports = router;
