let CommonCheck = require("../Check");
let fs = require("fs");

let StartFunc = ({ inFolderName, inFileNameOnly, inDataPK }) => {
    let LocalDataPK = inDataPK;

    let LocalReturnObject = {
        KTF: false,
        JsonData: {}
    };

    if (LocalDataPK > 0) {
        let LocalDataFromCommonCreate;
        let LocalDataFromJSON;
        let LocalFolderName = inFolderName;
        let LocalFileNameOnly = inFileNameOnly;
        let LocalFilePath;

        LocalDataFromCommonCreate = CommonCheck.ForExistence({
            inFolderName: LocalFolderName,
            inFileNameOnly: LocalFileNameOnly,
            inDataPK: LocalDataPK
        });

        LocalReturnObject = { ...LocalDataFromCommonCreate };
        LocalReturnObject.KTF = false;

        if (LocalDataFromCommonCreate.KTF === false) {
            return LocalReturnObject;
        };

        LocalFilePath = LocalDataFromCommonCreate.DisplayJsonPath
        LocalDataFromJSON = fs.readFileSync(LocalFilePath);
        LocalReturnObject.JsonData = JSON.parse(LocalDataFromJSON);

        LocalReturnObject.KTF = true;
    };

    return LocalReturnObject;
};

module.exports = {
    StartFunc
};