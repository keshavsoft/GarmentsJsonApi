var express = require('express');
var router = express.Router();

let CommonAdmin = require("./Users/Admin")

router.use('/Admin', CommonAdmin);

module.exports = router;