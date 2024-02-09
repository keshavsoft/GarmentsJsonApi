let CommonUserFuncs = require("../../../../../../../DataSupply/Fs/Config/JSONFolder/LoginFolder/UserDataJsonFile/Setup/Blank/WithCreation/ForCredentials");

let Save = ({ inUserName, inPassword }) => {

    return CommonUserFuncs.StartFunc({ inUserName, inPassword });
};

module.exports = { Save };