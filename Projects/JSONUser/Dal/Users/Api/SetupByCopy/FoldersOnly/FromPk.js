let CommonDataSupply = require("../../../../../../../DataSupply/Fs/LoginFolder/Admin/Setup/Basic");
let CommonSetUpShowData = require("../../../../../../../DataSupply/Fs/LoginFolder/UserDataJson/PullData/SetUpShowData");

let GetFunc = async () => {

    return await CommonSetUpShowData.StartFunc();
};

let CreateFunc = async ({ inUserPK }) => {

    return await CommonDataSupply.StartFunc({ inUserPK });
};

module.exports = { GetFunc, CreateFunc };