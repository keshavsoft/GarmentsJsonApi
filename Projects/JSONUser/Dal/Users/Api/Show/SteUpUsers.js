let CommonUserFuncs = require("../../../../../../DataSupply/Fs/LoginFolder/UserDataJson/PullData/SetUpShowData");

let ShowData = async () => {
    let LocalReturnData = await CommonUserFuncs.StartFunc();

    if (LocalReturnData.KTF) {
        return await LocalReturnData.JsonData;
    }
};

module.exports = { ShowData };