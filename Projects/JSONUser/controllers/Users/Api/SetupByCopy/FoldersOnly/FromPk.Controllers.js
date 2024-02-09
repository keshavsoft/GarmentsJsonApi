let Repo = require("../../../../../Repository/Users/Api/SetupByCopy/FoldersOnly/FromPk");

let GetFunc = async (req, res) => {
    let LocalUserPK = req.params.inUserPK;

    let ResData = await Repo.GetFunc({
        inUserPK: LocalUserPK
    });

    res.status(200).json(ResData);
};

let CreateFunc = async (req, res) => {
    let LocalUserPK = req.params.inUserPK;

    let ResData = await Repo.CreateFunc({
        inUserPK: LocalUserPK
    });

    res.status(200).json(ResData);
};

module.exports = { GetFunc, CreateFunc };