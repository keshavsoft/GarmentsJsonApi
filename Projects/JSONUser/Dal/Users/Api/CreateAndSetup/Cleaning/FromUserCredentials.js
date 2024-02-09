let CommonUserFuncs = require("../../../../../../../DataSupply/Fs/Config/JSONFolder/LoginFolder/UserDataJsonFile/Setup/Cleaning/WithCreation/Cleaning");

let Save = async ({ inUserName, inPassword }) => {
    return await CommonUserFuncs.StartFunc({ inUserName, inPassword });
};

module.exports = { Save };