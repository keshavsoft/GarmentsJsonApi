let Repo = require("../../../../../Repository/Users/Api/CreateAndSetup/Blank/ForCredentials");

let Save = (req, res) => {
    let LocalUserName = req.body.UserName;
    let LocalPassWord = req.body.PassWord;

    let ResponseData = Repo.Save({
        inUserName: LocalUserName,
        inPassword: LocalPassWord
    });
    res.json(ResponseData)
};

module.exports = { Save };