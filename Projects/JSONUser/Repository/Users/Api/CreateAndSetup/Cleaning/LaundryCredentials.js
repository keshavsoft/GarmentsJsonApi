let dal = require("../../../../../Dal/Users/Api/CreateAndSetup/Cleaning/LaundryCredentials");

exports.Save = async ({ inUserName, inPassword }) => {
    return await dal.Save({ inUserName, inPassword });
};