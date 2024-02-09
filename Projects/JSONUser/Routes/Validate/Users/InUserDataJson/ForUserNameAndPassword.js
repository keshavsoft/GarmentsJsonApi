let express = require("express");
let router = express.Router();

let Repo = require("../../../../Repository/Validate/Users/InUserDataJson/ForUserNameAndPassword")
let CommonMiddleware = require("../../../../Middleware/Validate/Users/InUserDataJson/ForUserNameAndPassword")

let CommonjwtFunc = require("../../../../../../common/Jwt/Bs5");

router.post('/', (req, res,) => {
    let LocalUserName = req.body.inUserName;
    let LocalPassWord = req.body.inPassWord;

    Repo.ForUserAndPassword({
        inUserName: LocalUserName,
        inPassWord: LocalPassWord,
    }).then(PromiseData => {
        res.json(PromiseData);
    })
});

router.post('/TokenToCookie', (req, res,) => {
    let LocalUserName = req.body.inUserName;
    let LocalPassWord = req.body.inPassWord;

    Repo.ForUserAndPasswordReturnFirmDetails({
        inUserName: LocalUserName,
        inPassWord: LocalPassWord,
    }).then(PromiseData => {
        console.log("PromiseData : ", PromiseData);
        if (PromiseData.KTF === false) {
            res.json(PromiseData);
        } else {

            if (PromiseData.kPK > 0) {
                CommonjwtFunc.CreateToken({
                    inUserName: LocalUserName,
                    inDataPk: PromiseData.kPK
                }).then((PromiseDataFromJwt) => {
                    res.cookie('KToken', PromiseDataFromJwt, { maxAge: 900000, httpOnly: false });

                    PromiseData.KTF = true;

                    res.json(PromiseData);
                });
            };
        };
    })
});

router.post('/LoginCheckReturnTokenOnly', CommonMiddleware.ForUserNameAndPassword, (req, res,) => {
    let LocalUserName = req.body.inUserName;
    let LocalPassWord = req.body.inPassWord;

    Repo.ForUserAndPassword({
        inUserName: LocalUserName,
        inPassWord: LocalPassWord,
    }).then(PromiseData => {
        if (PromiseData.KTF === false) {
            res.json(PromiseData);
        };

        if (PromiseData.kPK > 0) {
            CommonjwtFunc.CreateToken({
                inUserName: LocalUserName,
                inDataPk: PromiseData.kPK
            }).then((PromiseDataFromJwt) => {
                res.end(PromiseDataFromJwt);
            });
        };
    });

});

module.exports = router;