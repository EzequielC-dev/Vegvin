const express = require("express");
const router = express.Router();

const forumController = require("../controllers/forumController");

router.get("/viewTopics", function(req, res) {
    forumController.viewTopics(req, res);
})

router.post("/postTopic", function(req, res) {
    forumController.postTopic(req, res);
});

module.exports = router;