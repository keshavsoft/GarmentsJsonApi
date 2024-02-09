let express = require("express");
let router = express.Router();

let CommonFromUserCredentials = require("./Cleaning/FromUserCredentials");
let CommonLaundryCredentials = require("./Cleaning/LaundryCredentials");

router.use('/FromUserCredentials', CommonFromUserCredentials);
router.use('/LaundryCredentials', CommonLaundryCredentials);

module.exports = router;