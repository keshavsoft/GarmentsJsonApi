var express = require('express');
var router = express.Router();
let Middlewares = require("../../../../../Middleware/Users/Api/CreateAndSetup/Cleaning/FromUserCredentials")
let CommonControllers = require("../../../../../controllers/Users/Api/CreateAndSetup/Cleaning/FromUserCredentials");

router.post('/', Middlewares.Save, CommonControllers.Save);

module.exports = router;