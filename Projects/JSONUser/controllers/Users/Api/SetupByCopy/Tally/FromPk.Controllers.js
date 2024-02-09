let Repo = require("../../../../../Repository/Users/Api/SetupByCopy/Tally/FromPk");

let CreateFunc = async (req, res) => {
    let LocalUserPK = req.params.inUserPK;

    let ResData = await Repo.CreateFunc({
        inUserPK: LocalUserPK
    });

    res.status(200).json(ResData);
};

module.exports = { CreateFunc };