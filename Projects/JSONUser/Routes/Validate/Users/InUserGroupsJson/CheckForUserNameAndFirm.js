let express = require("express");
let router = express.Router();

let CommonControllers = require("../../../../../../Projects/JSONUser/controllers/Validate/Users/InUserGroupsJson/CheckForUserNameAndFirm.Controllers");

router.post('/', CommonControllers.CheckForUserNamePasswordFirm, (req, res,) => {
    let LocalUserName = req.body.inUserName;
    let LocalPassWord = req.body.inPassWord;
    let LocalFirmName = req.body.inFirmName;
    console.log("ssssssssssssssss");
    Repo.ForUserPasswordFirm({
        inUserName: LocalUserName,
        inPassWord: LocalPassWord,
        inFirmName: LocalFirmName
    }).then(PromiseData => {
        res.json(PromiseData);
    });
});

module.exports = router;