// let CommonUserFuncs = require("../../../../../../../DataSupply/Fs/Config/JSONFolder/LoginFolder/UserDataJsonFile/Setup/Cleaning/WithCreation/ForChat");
let CommonUserFuncs = require("../../../../../../../DataSupply/Fs/Config/JSONFolder/LoginFolder/UserDataJsonFile/Setup/Quotation/WithCreation/ForCredentials");

let Save = async ({ inUserName, inPassword }) => {

    return await CommonUserFuncs.StartFunc({ inUserName, inPassword });
};

module.exports = { Save };