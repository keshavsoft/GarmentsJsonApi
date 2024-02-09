var express = require('express');
var router = express.Router();

let CommonShowUsers = require("./Admin/ShowUsers")
let CommonInsertData = require("./Admin/InsertData")

router.use('/ShowUsers', CommonShowUsers);
router.use('/InsertData', CommonInsertData);

module.exports = router;