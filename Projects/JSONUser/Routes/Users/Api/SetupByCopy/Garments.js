let express = require("express");
let router = express.Router();

let CommonFromPk = require("./Garments/FromPk");

router.use('/FromPk', CommonFromPk);

module.exports = router;