var express = require('express');
var router = express.Router();
let Controllers = require("../../../../controllers/Users/Api/Show/AllUsers.Controllers");

router.get('/', Controllers.GetFunc);

module.exports = router;