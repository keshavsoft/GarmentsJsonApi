var express = require('express');
var router = express.Router();
let Controllers = require("../../../../controllers/Admin/UserFolder/FromUpload/Controllers.ShowDatas");

router.get('/', Controllers.ShowData)
router.delete('/', Controllers.Delete)

module.exports = router;