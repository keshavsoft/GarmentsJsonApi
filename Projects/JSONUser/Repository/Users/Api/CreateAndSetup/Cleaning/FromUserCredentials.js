let dal = require("../../../../../Dal/Users/Api/CreateAndSetup/Cleaning/FromUserCredentials");

exports.Save = async ({ inUserName, inPassword }) => {
    return await dal.Save({ inUserName, inPassword });
};