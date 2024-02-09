let express = require("express");
let router = express.Router();

let CommonForChatCredentials = require("./ForChat/ForChatCredentials");

router.use('/ForChatCredentials', CommonForChatCredentials);

module.exports = router;