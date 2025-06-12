const express = require("express");
const router = express.Router();

const topicController = require("../controllers/topicController");
const upload = require("../config/upload");

router.get("/viewComments/:id", function (req, res) {
  topicController.viewComments(req, res);
});

router.get("/countAnswers/:id", function (req, res) {
  topicController.countAnswers(req, res);
});

router.get("/getCategories", function (req, res) {
  topicController.getCategories(req, res);
});

router.post("/addComment", upload.single("photo"), function (req, res) {
  topicController.addComment(req, res);
});

router.post("/addCommentWithoutImage", function (req, res) {
  topicController.addCommentWithoutImage(req, res);
});

module.exports = router;
