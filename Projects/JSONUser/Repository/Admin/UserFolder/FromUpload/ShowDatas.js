let dal = require("../../../../Dal/Admin/UserFolder/FromUpload/ShowDatas");

exports.ShowData = () => {
    return dal.ShowData();
};

exports.Delete = ({inFolderName}) => {
    return dal.Delete({inFolderName});
};