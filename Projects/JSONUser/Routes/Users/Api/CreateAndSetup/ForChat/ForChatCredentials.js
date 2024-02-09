var express = require('express');
var router = express.Router();
let Middlewares = require("../../../../../Middleware/Users/Api/CreateAndSetup/ForChat/ForChatCredentials")
let CommonControllers = require("../../../../../controllers/Users/Api/CreateAndSetup/ForChat/ForChatCredentials");

router.post('/', Middlewares.Save, CommonControllers.Save);

module.exports = router;