let dal = require("../../../../../Dal/Users/Api/SetupByCopy/FoldersOnly/FromPk");

exports.GetFunc = async () => {
    return await dal.GetFunc();
};

exports.CreateFunc = async ({ inUserPK }) => {
    return await dal.CreateFunc({ inUserPK });
};