let fs = require("fs");
let CommonCheckForFile = require("../Check");

let StartFunc = ({ inOriginalData, inDataToUpdate }) => {
    let LocalReturnData = { KTF: false, DirPath: "", CreatedLog: {} };
    let LocalFromCheck = CommonCheckForFile.ForExistence();

    if (LocalFromCheck.KTF) {
        // LocalReturnData.FilePath = LocalFromCheck.FilePath;
        LocalReturnData.FilePath = LocalFromCheck.UserDataJsonFilePath;
        LocalCheckBeforeInsert({ inOriginalData, inDataToUpdate });

        try {
            fs.writeFileSync(LocalReturnData.FilePath, JSON.stringify(inDataToUpdate));
            LocalReturnData.KTF = true;
        } catch (err) {
            console.log("err:", err);
        };

    } else {
        LocalReturnData.KReason = "Json file not found";
    };

    return LocalReturnData;
};

let LocalCheckBeforeInsert = ({ inOriginalData, inDataToUpdate }) => {
    let LocalReturnObject = { KTF: true };
    //debug("inserted length : ", JSON.stringify(inDataToUpdate).length, inOriginalData.length, JSON.stringify(inDataToUpdate).length - inOriginalData.length);

    //debug("inserted length : ", JSON.stringify(inDataToUpdate).length, JSON.stringify(inOriginalData).length, JSON.stringify(inDataToUpdate).length - inOriginalData.length, Math.abs(JSON.stringify(inDataToUpdate).length - inOriginalData.length));

    return LocalReturnObject;
};

module.exports = { StartFunc };
