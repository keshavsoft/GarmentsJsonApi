let express = require("express");
let router = express.Router();

let CommonForBlankCredentials = require("./Blank/ForCredentials");

router.use('/ForCredentials', CommonForBlankCredentials);

module.exports = router;