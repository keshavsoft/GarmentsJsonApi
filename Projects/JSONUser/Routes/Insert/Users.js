var express = require('express');
var router = express.Router();
let CommonInUserGroupsJson = require("./Users/InUserGroupsJson");
let CommonUserDataJson = require("./Users/UserDataJson");

router.use('/InUserGroupsJson', CommonInUserGroupsJson);
router.use('/UserDataJson', CommonUserDataJson);

module.exports = router;