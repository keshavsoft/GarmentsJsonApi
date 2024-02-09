let CommonUserFuncs = require("../../../../../../DataSupply/Fs/Config/Compare/Upload-Json/ForPk");
let CommonDataSupply = require("../../../../../../DataSupply/Fs/Config/JSONUploadFolder/UserFolders/DeleteFuncs/DeleteData");

let ShowData = () => {

    return CommonUserFuncs.StartFunc();
};

let Delete = ({inFolderName}) => {

    return CommonDataSupply.StartFunc({inFolderName});
};

module.exports = { ShowData ,Delete};
