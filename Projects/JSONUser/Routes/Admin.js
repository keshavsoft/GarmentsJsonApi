var express = require('express');
var router = express.Router();
let SubRouteApi = require("./Admin/Api");
let commonUserFolder = require("./Admin/UserFolder");

router.use('/Api', SubRouteApi);
router.use('/UserFolder', commonUserFolder);

module.exports = router;