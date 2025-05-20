const express = require("express");
const router = express.Router();

const forumController = require("../controllers/forumController")

router.post("/postTopic", function(req, res) {
    forumController.postTopic(req, res);
});

module.exports = router;