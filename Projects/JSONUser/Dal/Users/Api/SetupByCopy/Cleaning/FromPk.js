let CommonDataSupply = require("../../../../../../../DataSupply/Fs/LoginFolder/Admin/Setup/Cleaning");

let CreateFunc = async ({ inUserPK }) => {

    return await CommonDataSupply.StartFunc({ inUserPK });
};

module.exports = { CreateFunc };