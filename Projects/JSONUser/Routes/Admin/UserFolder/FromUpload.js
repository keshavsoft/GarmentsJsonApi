var express = require('express');
var router = express.Router();
let commonShowDatas = require('./FromUpload/ShowDatas');

router.use('/ShowDatas', commonShowDatas);

module.exports = router;