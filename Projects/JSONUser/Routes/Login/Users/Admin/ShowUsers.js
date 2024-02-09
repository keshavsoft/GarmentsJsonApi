var express = require('express');
var router = express.Router();

let CommonWithFolderCheck = require("./ShowUsers/WithFolderCheck")

router.use('/WithFolderCheck', CommonWithFolderCheck);

module.exports = router;