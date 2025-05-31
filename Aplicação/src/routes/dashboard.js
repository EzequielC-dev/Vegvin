const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardController");

router.post("/totalPosts", function (req, res) {
  dashboardController.totalPosts(req, res);
});

router.post("/mostUsedCategory", function (req, res) {
  dashboardController.mostUsedCategory(req, res);
});

router.post("/historyPosts", function (req, res) {
  dashboardController.historyPosts(req, res);
});

router.post("/viewCategoriesDashboard", function (req, res) {
  dashboardController.viewCategoriesDashboard(req, res);
});

router.post("/viewWeeklyPosts", function (req, res) {
  dashboardController.viewWeeklyPosts(req, res);
});

module.exports = router;
