var express = require('express');
var router = express.Router();
let CommonUserNameAndPassword = require("./UserDataJson/UserNameAndPassword");
let CommonCreateForCleaning = require("./UserDataJson/CreateForCleaning");

router.use('/UserNameAndPassword', CommonUserNameAndPassword);
router.use('/CreateForCleaning', CommonCreateForCleaning);

module.exports = router;