let CommonUserFuncs = require("../../../../../DataSupply/Fs/Config/JSONFolder/UserFolders/PullFolders/getDirectoriesWithUserCredntials");

let ShowData = async ({ inUserPK }) => {
    return await CommonUserFuncs.StartFunc({ inUserPK });


};

module.exports = { ShowData };