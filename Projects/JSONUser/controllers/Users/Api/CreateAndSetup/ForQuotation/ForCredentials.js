let Repo = require("../../../../../Repository/Users/Api/CreateAndSetup/ForQuotation/ForCredentials");

let Save = async (req, res) => {
    let LocalUserName = req.body.UserName;
    let LocalPassWord = req.body.PassWord;

    let ResponseData = await Repo.Save({
        inUserName: LocalUserName,
        inPassword: LocalPassWord
    });
    res.json(ResponseData)
};

module.exports = { Save };