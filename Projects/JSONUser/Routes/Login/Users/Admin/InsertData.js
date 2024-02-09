var express = require('express');
var router = express.Router();

let CommonFromUpload = require("./InsertData/FromUpload")

router.use('/FromUpload', CommonFromUpload);

module.exports = router;