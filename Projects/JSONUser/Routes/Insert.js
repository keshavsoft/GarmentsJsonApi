var express = require('express');
var router = express.Router();
let CommonUsers = require("./Insert/Users");

router.use('/Users', CommonUsers);

module.exports = router;