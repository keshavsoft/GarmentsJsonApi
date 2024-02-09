let express = require("express");
let router = express.Router();

let controllers = require("../../../../../controllers/Login/Users/Admin/InsertData/Controllers.FromUpload")

router.get('/:inJsonPk', controllers.Upload);

module.exports = router
