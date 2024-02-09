let fs = require("fs");
let CommonFromCheck = require("../Check");

let MockAllowFunc = require("../../../../../../MockAllow.json")

let ForExistence = ({ DataPK }) => {
    let LocalinDataPK = DataPK;
    let LocalFileName = "Preload";

    let LocalFromCommonFromCheck = CommonFromCheck.ForExistence({
        inDataPK: LocalinDataPK
    });

    let LocalReturnData = { ...LocalFromCommonFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.PreloadJsonPath = `${LocalFromCommonFromCheck.DirPath}/${LocalFileName}.json`;

    if (LocalFromCommonFromCheck.KTF === false) {
        return LocalReturnData;
    };

    try {
        fs.statSync(LocalReturnData.PreloadJsonPath);

        LocalReturnData.KTF = true;
    } catch (error) {
        LocalReturnData.KReason = "File not found!";
    };

    return LocalReturnData;
};

if (MockAllowFunc.AllowMock) {
    if (MockAllowFunc.MockKey === "K12") {
        let result = ForExistence({ DataPK: MockAllowFunc.DataPK });
        console.log("result : ", result);
    };
};

module.exports = { ForExistence };
