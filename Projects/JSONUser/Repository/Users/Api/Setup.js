let dal = require("../../../Dal/Users/Api/Setup");

exports.Basic = async ({ inUserPK }) => {
    return await dal.Basic({ inUserPK });
};

exports.CreateFoldersOnly = async ({ inUserPK }) => {
    return await dal.CreateFoldersOnly({ inUserPK });
};

exports.CreateForMsSql = async ({ inUserPK }) => {
    return await dal.CreateForMsSql({ inUserPK });
};