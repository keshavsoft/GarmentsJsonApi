var express = require('express');
var router = express.Router();
let controllers = require("../../../controllers/Users/Api/ShowUsers.Controllers");

router.get('/',controllers.ShowData);

module.exports = router;