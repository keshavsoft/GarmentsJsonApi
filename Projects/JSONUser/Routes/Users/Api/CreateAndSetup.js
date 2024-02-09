let express = require("express");
let router = express.Router();

let CommonCleaning = require("./CreateAndSetup/Cleaning");
let CommonForChat = require("./CreateAndSetup/ForChat");
let CommonForBlank = require("./CreateAndSetup/Blank");
let CommonForQuotation = require("./CreateAndSetup/ForQuotation");

router.use('/Cleaning', CommonCleaning);
router.use('/ForChat', CommonForChat);
router.use('/Blank', CommonForBlank);
router.use('/ForQuotation', CommonForQuotation);

module.exports = router;