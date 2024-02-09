let DataSupply = require("../../../../../../DataSupply/Fs/Config/JSONFolder/LoginFolder/UserDataJsonFile/Setup/Cleaning/WithCreation/Cleaning");

let GetFunc = ({ inUserName, inPassword }) => {
    return DataSupply.StartFunc({ inUserName, inPassword });
};

module.exports = { GetFunc };