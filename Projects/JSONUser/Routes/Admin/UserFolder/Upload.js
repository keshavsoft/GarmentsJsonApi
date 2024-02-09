let express = require('express');
let router = express.Router();
let controllers = require("../../../controllers/Admin/UserFolder/Upload");

router.post('/',controllers.Upload);

module.exports = router;