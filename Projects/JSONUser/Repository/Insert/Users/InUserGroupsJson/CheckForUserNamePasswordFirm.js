let Dal = require("../../../../Dal/Insert/Users/InUserGroupsJson/CheckForUserNamePasswordFirm")

exports.ForUserPasswordFirm = async ({ inUserName, inPassWord, inFirmName }) => {
   return await Dal.ForUserPasswordFirm({ inUserName, inPassWord, inFirmName });
};
