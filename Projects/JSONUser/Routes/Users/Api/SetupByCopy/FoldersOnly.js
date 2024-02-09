let express = require("express");
let router = express.Router();

let CommonFromPk = require("./FoldersOnly/FromPk");

router.use('/FromPk', CommonFromPk);

module.exports = router;