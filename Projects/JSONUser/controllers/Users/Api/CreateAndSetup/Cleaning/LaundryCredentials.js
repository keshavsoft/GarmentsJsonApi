let Repo = require("../../../../../Repository/Users/Api/CreateAndSetup/Cleaning/LaundryCredentials");

let Save = (req, res) => {
    let LocalUserName = req.body.UserName;
    let LocalPassWord = req.body.PassWord;
    Repo.Save({
        inUserName: LocalUserName,
        inPassword: LocalPassWord
    }).then((PromieData) => {
        res.end(JSON.stringify(PromieData));
    }).catch((PromiseError) => {
        res.end(JSON.stringify(PromiseError));
    });
};

module.exports = { Save };