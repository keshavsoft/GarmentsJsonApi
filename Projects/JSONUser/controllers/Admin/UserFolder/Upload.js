let Repo = require("../../../Repository/Admin/UserFolder/Upload");

let Upload = (req, res) => {

    Repo.Upload({
    }).then((PromieData) => {
        res.end(JSON.stringify(PromieData));
    });
};

module.exports = { Upload };