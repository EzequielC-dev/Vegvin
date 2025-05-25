const express = require('express');
const router = express.Router();

const dashboardController = require("../controllers/dashboardController")

router.post("/totalPosts", function(req, res) {
    dashboardController.totalPosts(req, res);
})

router.post("/mostUsedCategory", function(req, res) {
    dashboardController.mostUsedCategory(req, res);
})

module.exports = router;