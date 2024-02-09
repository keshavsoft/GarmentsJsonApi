//let Datasupply = require("../../../../../../../DataSupply/Fs/Config/JSONFolder/UserFolders/InsertFolder/FromUpload");
let Datasupply = require("../../../../../../../DataSupply/Fs/Config/JSONFolder/UserFolders/InsertFolder/FromUpload");

let Upload = ({ inDataPK }) => {
    if (inDataPK > 0) {
        return Datasupply.StartFunc({ inJsonPk: inDataPK })
    };
};

module.exports = { Upload };