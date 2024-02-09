let dal = require("../../../../../Dal/Users/Api/SetupByCopy/Tally/FromPk");

exports.CreateFunc = async ({ inUserPK }) => {
    return await dal.CreateFunc({ inUserPK });
};