let Repo = require("../../../../Repository/Admin/Api/InAdminDataJson/Check");
let CommonjwtFunc = require("../../../../../../common/Jwt/ForUserManagement");

let TokenToCookie = (req, res) => {
    let LocalUserName = req.body.inUserName;
    let LocalPassWord = req.body.inPassword;

    Repo.ForUserAndPassword({
        inUserName: LocalUserName,
        inPassWord: LocalPassWord
    }).then(PromiseDataFromUserCheck => {
        if (PromiseDataFromUserCheck.KTF) {
            if (PromiseDataFromUserCheck.kPK > 0) {
                CommonjwtFunc.CreateToken({
                    inUserName: LocalUserName,
                    inDataPk: PromiseDataFromUserCheck.kPK
                }).then((PromiseDataFromJwt) => {
                    res.cookie(PromiseDataFromJwt.CookieName, PromiseDataFromJwt.KToken, { maxAge: 900000, httpOnly: false });

                    res.json(PromiseDataFromUserCheck);
                });
            } else {
                res.json(PromiseDataFromUserCheck);
            };
        } else {
            res.json(PromiseDataFromUserCheck);
        };
    });
};

let LoginCheck = (req, res) => {
    let LocalUserName = req.body.inUserName;
    let LocalPassWord = req.body.inPassword;

    Repo.ForUserAndPassword({
        inUserName: LocalUserName,
        inPassWord: LocalPassWord
    }).then(PromiseDataFromUserCheck => {
        if (PromiseDataFromUserCheck.KTF) {
            if (PromiseDataFromUserCheck.kPK > 0) {
                CommonjwtFunc.CreateToken({
                    inUserName: LocalUserName,
                    inDataPk: PromiseDataFromUserCheck.kPK
                }).then((PromiseDataFromJwt) => {
                    res.cookie(PromiseDataFromJwt.CookieName, PromiseDataFromJwt.KToken, { maxAge: 900000, httpOnly: false });

                    res.json(PromiseDataFromUserCheck);
                });
            } else {
                res.json(PromiseDataFromUserCheck);
            };
        } else {
            res.json(PromiseDataFromUserCheck);
        };
    });

};


let TokenReturnOnly = (req, res) => {
    let LocalUserName = req.body.inUserName;
    let LocalPassWord = req.body.inPassword;

    Repo.ForUserAndPassword({
        inUserName: LocalUserName,
        inPassWord: LocalPassWord
    }).then(PromiseDataFromUserCheck => {
        if (PromiseDataFromUserCheck.KTF) {
            if (PromiseDataFromUserCheck.kPK > 0) {
                CommonjwtFunc.CreateToken({
                    inUserName: LocalUserName,
                    inDataPk: PromiseDataFromUserCheck.kPK
                }).then((PromiseDataFromJwt) => {
                    res.end(PromiseDataFromJwt.KToken);
                });
            } else {
                res.json(PromiseDataFromUserCheck);
            };
        } else {
            res.json(PromiseDataFromUserCheck);
        };
    });
};

module.exports = { TokenToCookie, TokenReturnOnly, LoginCheck };