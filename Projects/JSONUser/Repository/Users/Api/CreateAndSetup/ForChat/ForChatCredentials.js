let dal = require("../../../../../Dal/Users/Api/CreateAndSetup/ForChat/ForChatCredentials");

exports.Save = async ({ inUserName, inPassword }) => {
    return await dal.Save({ inUserName, inPassword });
};