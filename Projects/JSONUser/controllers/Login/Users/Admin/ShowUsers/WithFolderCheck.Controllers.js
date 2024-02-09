let Repo = require("../../../../../Repository/Login/Users/Admin/ShowUsers/WithFolderCheck");
const decompress = require('decompress');

let FolderCheck = (req, res) => {
    Repo.FolderCheck({
    }).then((PromieData) => {
        res.end(JSON.stringify(PromieData));
    });
};

let PostFunc = (req, res) => {
    // console.log("11111111111111 : ", req.file);
    let LocalToPath = "KData/JSON-UpLoad"
    decompress(req.file.originalname, LocalToPath).then(files => {
        res.sendStatus(200);
        console.log('done!', res);
    });

    res.end("");
};


module.exports = { FolderCheck, PostFunc };