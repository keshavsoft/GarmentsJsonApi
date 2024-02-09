let express = require("express");
let router = express.Router();

let Repo = require("../../../../Repository/Insert/Users/UserDataJson/CreateForCleaning");
let CommonjwtUserCredentials = require("../../../../../../common/Jwt/ForLogin/UserCredentials");

router.get('/:inUserName/:inPassWord', (req, res) => {
    let localinUserName = req.params.inUserName;
    let localinPassword = req.params.inPassWord;

    let Response = Repo.GetFunc({
        inUserName: localinUserName,
        inPassword: localinPassword
    });

    res.status(200).json(Response);
});

router.get('/TokenToCookie/:inUserName/:inPassWord', (req, res) => {
    let localinUserName = req.params.inUserName;
    let localinPassword = req.params.inPassWord;

    let Response = Repo.GetFunc({
        inUserName: localinUserName,
        inPassword: localinPassword
    });

    if (Response.KTF === false && Response.UserAndDataPkFolderFound && "kPK" in Response) {
        CommonjwtUserCredentials.CreateToken({
            inUserName: localinUserName,
            inDataPk: Response.kPK
        }).then((PromiseDataFromJwt) => {
            res.cookie('KToken', PromiseDataFromJwt, { maxAge: 900000, httpOnly: false });

            res.json(Response);
        });
    }else{
        res.json(Response);
    };
    // CommonjwtUserCredentials.CreateToken({
    //     inUserName: LocalUserName,
    //     inDataPk: PromiseData.kPK
    // }).then((PromiseDataFromJwt) => {
    //     res.cookie('KToken', PromiseDataFromJwt, { maxAge: 900000, httpOnly: false });

    //     PromiseData.KTF = true;

    //     res.json(PromiseData);
    // });

    // res.status(200).json(Response);
});

module.exports = router;