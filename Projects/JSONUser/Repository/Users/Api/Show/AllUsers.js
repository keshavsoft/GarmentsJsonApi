let dal = require("../../../../Dal/Users/Api/Show/AllUsers");

exports.ShowData = async () => {
    return await dal.ShowData();
};