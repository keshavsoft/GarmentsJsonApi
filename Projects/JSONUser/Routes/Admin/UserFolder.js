var express = require('express');
var router = express.Router();

let CommonUpload = require("./UserFolder/Upload");
let CommonFromUpload = require("./UserFolder/FromUpload");

router.use('/Upload', CommonUpload);
router.use('/FromUpload', CommonFromUpload);

module.exports = router;