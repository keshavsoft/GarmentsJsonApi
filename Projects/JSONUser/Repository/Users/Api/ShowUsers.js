let dal = require("../../../Dal/Users/Api/ShowUsers");

exports.ShowData = async ({inUserPK}) => {
    return await dal.ShowData({inUserPK});
};