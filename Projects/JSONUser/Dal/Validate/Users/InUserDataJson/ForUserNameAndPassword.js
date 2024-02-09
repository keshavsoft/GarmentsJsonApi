let DataSupply = require("../../../../../../DataSupply/Fs/LoginFolder/UserDataJson/Find/UserNameAndPassword");
let DataSupply1 = require("../../../../../../DataSupply/Fs/Config/JSONFolder/LoginFolder/UserDataJsonFile/Find/FindUserNameAndPassword");

let ForUserAndPassword = async ({ inUserName, inPassWord }) => {
    // return await DataSupply.StartFunc({ inUserName, inPassWord });
    return await DataSupply1.StartFunc({ inUserName, inPassWord });
};

let ForUserAndPasswordReturnFirmDetails = async ({ inUserName, inPassWord }) => {
    return await DataSupply.ForUserAndPasswordReturnFirmDetails({ inUserName, inPassWord });
};

module.exports = { ForUserAndPassword, ForUserAndPasswordReturnFirmDetails };