let DataSupply = require("../../../../../../DataSupply/Fs/Config/JSONFolder/LoginFolder/UserDataJsonFile/Insert/UserNamePassword");

let StarFunc = ({ inUserName, inPassword }) => {
    return DataSupply.StartFunc({ inUserName, inPassword });
};

module.exports = { StarFunc };