let express = require("express");
let router = express.Router();

let CommonFromPk = require("./Tally/FromPk");

router.use('/FromPk', CommonFromPk);

module.exports = router;