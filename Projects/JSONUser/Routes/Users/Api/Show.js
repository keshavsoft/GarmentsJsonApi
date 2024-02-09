let express = require("express");
let router = express.Router();

let CommonAllUsers = require("./Show/AllUsers");
let CommonSteUpUsers = require("./Show/SteUpUsers");

router.use('/AllUsers', CommonAllUsers);
router.use('/SteUpUsers', CommonSteUpUsers);

module.exports = router;
