var express = require('express');
var router = express.Router();
let Middlewares = require("../../../../../Middleware/Users/Api/CreateAndSetup/ForQuotation/ForCredentials")
let CommonControllers = require("../../../../../controllers/Users/Api/CreateAndSetup/ForQuotation/ForCredentials");

router.post('/', Middlewares.Save, CommonControllers.Save);

module.exports = router;