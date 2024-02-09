let dal = require("../../../../../Dal/Users/Api/SetupByCopy/Garments/FromPk");

exports.CreateFunc = async ({ inUserPK }) => {
    return await dal.CreateFunc({ inUserPK });
};