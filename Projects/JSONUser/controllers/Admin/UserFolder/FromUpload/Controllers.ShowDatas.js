let Repo = require("../../../../Repository/Admin/UserFolder/FromUpload/ShowDatas");

let ShowData = (req, res) => {

    let LocalFromRepo = Repo.ShowData()

    res.json(LocalFromRepo);

};

let Delete = (req, res) => {

    let localinFolderName = req.body.inFolderName

    let LocalFromRepo = Repo.Delete({
        inFolderName: localinFolderName
    });

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };

};

module.exports = { ShowData, Delete };