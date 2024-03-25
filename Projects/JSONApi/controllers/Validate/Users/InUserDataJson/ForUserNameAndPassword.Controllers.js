let Repo = require("../../../../Repository/Validate/Users/InUserDataJson/ForUserNameAndPassword")
// let CommonjwtFunc = require("../../../../../../common/Jwt/Bs5");
let CommonjwtFunc = require("../../../../../../common/Jwt/ForLogin/UserCredentials");

let TokenToCookieFirmDetailsAlso = (req, res,) => {
    let LocalUserName = req.body.inUserName;
    let LocalPassWord = req.body.inPassWord;

    Repo.TokenToCookieFirmDetailsAlso({
        inUserName: LocalUserName,
        inPassWord: LocalPassWord,
    }).then(PromiseData => {
        if (PromiseData.KTF === false) {
            res.json(PromiseData);
        } else {
            if (PromiseData.kPK > 0) {
                CommonjwtFunc.CreateToken({
                    inUserName: LocalUserName,
                    inDataPk: PromiseData.kPK
                }).then((PromiseDataFromJwt) => {
                    // console.log("PromiseDataFromJwt:",PromiseDataFromJwt);
                    res.cookie('KToken', PromiseDataFromJwt, { maxAge: 900000, httpOnly: false });

                    PromiseData.KTF = true;

                    res.json(PromiseData);
                }).catch((err)=>{
                    console.log("err:",err);
                    res.status(400).send(err)
                });
            };
        };
    })
};

module.exports = { TokenToCookieFirmDetailsAlso };