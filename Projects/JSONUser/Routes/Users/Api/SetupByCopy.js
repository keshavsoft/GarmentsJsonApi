let express = require("express");
let router = express.Router();

let CommonCleaning = require("./SetupByCopy/Cleaning");
let CommonFoldersOnly = require("./SetupByCopy/FoldersOnly");
let CommonGarments = require("./SetupByCopy/Garments");
let CommonTally = require("./SetupByCopy/Tally");

router.use('/Cleaning', CommonCleaning);
router.use('/FoldersOnly', CommonFoldersOnly);
router.use('/Garments', CommonGarments);
router.use('/Tally', CommonTally);

module.exports = router;