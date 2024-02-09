let dal = require("../../../../../Dal/Users/Api/CreateAndSetup/Blank/ForCredentials");

exports.Save = ({ inUserName, inPassword }) => {
    return dal.Save({ inUserName, inPassword });
};