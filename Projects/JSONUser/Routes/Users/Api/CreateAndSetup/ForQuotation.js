let express = require("express");
let router = express.Router();

let CommonForChatCredentials = require("./ForQuotation/ForCredentials");

router.use('/ForCredentials', CommonForChatCredentials);

module.exports = router;