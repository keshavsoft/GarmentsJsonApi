var express = require('express');
var router = express.Router();
let CommonCheckForUserNamePasswordFirm = require("./InUserGroupsJson/CheckForUserNamePasswordFirm");

router.use('/CheckForUserNamePasswordFirm', CommonCheckForUserNamePasswordFirm);

module.exports = router;