const express = require("express");
const router = express.Router();

const settingController = require(`../controllers/settingController`);

router.put("/updateName", function(req, res) {
    settingController.updateName(req, res);
});

router.put("/updateEmail", function(req, res) {
    settingController.updateEmail(req, res);
});

router.put("/updatePassword", function(req, res) {
    settingController.updatePassword(req, res);
});

router.put("/updateDate", function(req, res) {
    settingController.updateDate(req, res);
});

module.exports = router;