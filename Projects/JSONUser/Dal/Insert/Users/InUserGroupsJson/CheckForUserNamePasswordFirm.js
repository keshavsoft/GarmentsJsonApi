//let DataSupply = require("../../../../../../DataSupply/Fs/LoginFolder/UserGroups/Find/InJson");
// let DataSupply = require("../../../../../../DataSupply/Fs/LoginFolder/UserGroups/InsertData/NewUser");
let CommonDataSupply = require("../../../../../../DataSupply/Fs/Config/JSONFolder/LoginFolder/UserGroupsJsonFile/NewUser");

let ForUserPasswordFirm = async ({ inUserName, inPassWord, inFirmName }) => {
   //return await DataSupply.StartFunc({ inUserName, inPassWord, inFirmName });

   return await CommonDataSupply.StartFunc({
      UserName: inUserName,
      PassWord: inPassWord,
      FirmName: inFirmName
   });
};

module.exports = { ForUserPasswordFirm };