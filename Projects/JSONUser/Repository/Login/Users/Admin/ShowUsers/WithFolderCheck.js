let dal = require("../../../../../Dal/Login/Users/Admin/ShowUsers/WithFolderCheck");

exports.FolderCheck = async () => {
    return await dal.FolderCheck();
};