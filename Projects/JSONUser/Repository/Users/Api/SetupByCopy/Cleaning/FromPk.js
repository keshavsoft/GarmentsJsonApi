let dal = require("../../../../../Dal/Users/Api/SetupByCopy/Cleaning/FromPk");

exports.CreateFunc = async ({ inUserPK }) => {
    return await dal.CreateFunc({ inUserPK });
};