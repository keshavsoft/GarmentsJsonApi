let Repo = require("../../../../../Repository/Login/Users/Admin/InsertData/FromUpload");

let Upload = (req, res) => {
    let LocalDataPk = req.params.inJsonPk;

    let LocalFromRepo = Repo.Upload({
        inDataPK: LocalDataPk
    });
    console.log("LocalFromRepo:",LocalFromRepo);
    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(400)

    };

    // res.json(LocalFromRepo);
    // console.log("LocalFromRepo:",LocalFromRepo);

};

module.exports = { Upload };