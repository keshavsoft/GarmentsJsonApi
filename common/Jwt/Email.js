var jwt = require('jsonwebtoken');
let CommonToken = process.env.KS_EMAIL_TOKENSECRET;

exports.CreateToken = ({ inUserName, inEmail }) => {
    console.log("CreateToken : ", CommonToken);
    return new Promise((resolve, reject) => {
        jwt.sign({ UserName: inUserName, inEmail }, CommonToken, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            };
        });
    });
};

exports.VerifyToken = ({ inUserName, inEmail, inKToken }) => {
    console.log("VerifyToken : ", CommonToken);
    return new Promise((resolve, reject) => {
        jwt.verify(inKToken, CommonToken, (err, authData) => {
            if (err) {
                reject(err);
                //res.send(JSON.stringify({ KTF: false }));
            } else {
                if ("UserName" in authData && "inEmail" in authData) {
                    let LocalUserName = authData.UserName;
                    let LocalinEmail = authData.inEmail;

                    if (inUserName === LocalUserName && inEmail === LocalinEmail) {
                        resolve(true);
                    } else {
                        reject(false);
                    }
                };
            }
        });
    });
};
