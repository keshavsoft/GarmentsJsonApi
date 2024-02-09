var express = require('express');
var router = express.Router();
let Middlewares = require("../../../../../Middleware/Users/Api/CreateAndSetup/Blank/ForCredentials")
let CommonControllers = require("../../../../../controllers/Users/Api/CreateAndSetup/Blank/ForCredentials");

router.post('/', Middlewares.Save, CommonControllers.Save);

module.exports = router;