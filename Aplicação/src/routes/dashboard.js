const express = require('express');
const router = express.Router();

const dashboardController = require("../controllers/dashboardController")

router.post("/totalPosts", function(req, res) {
    dashboardController.totalPosts(req, res);
})

module.exports = router;