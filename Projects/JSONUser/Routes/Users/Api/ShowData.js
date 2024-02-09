var express = require('express');
var router = express.Router();
let Repo = require("../../../Repository/Users/Api/ShowData");

router.get('/', async (req, res) => {

    let PromiseData = await Repo.ShowData()
    res.json(PromiseData);
});

module.exports = router;