let CommonDataSupply = require("../../../../../../../DataSupply/Fs/LoginFolder/Admin/Setup/BasicFromTemplates");

let CreateFunc = async ({ inUserPK }) => {

    return await CommonDataSupply.StartFunc({ inUserPK });
};

module.exports = { CreateFunc };