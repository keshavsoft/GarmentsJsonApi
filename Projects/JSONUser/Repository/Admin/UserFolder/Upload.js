let dal = require("../../../Dal/Admin/UserFolder/Upload");

exports.Upload = async () => {
    return await dal.Upload();
};