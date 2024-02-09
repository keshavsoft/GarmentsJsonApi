let Repo = require("../../../Repository/Users/Api/Setup");

let CreateFromTemplateData = (req, res) => {
    let LocalUserPK = req.params.inUserPK;
    
    Repo.Basic({
        inUserPK: LocalUserPK
    }).then((PromieData) => {
        res.end(JSON.stringify(PromieData));
    }).catch((PromiseError) => {
        res.end(JSON.stringify(PromiseError));
    });
};

let CreateFoldersOnly = (req, res) => {
    let LocalUserPK = req.params.inUserPK;

    Repo.CreateFoldersOnly({
        inUserPK: LocalUserPK
    }).then((PromieData) => {
        res.end(JSON.stringify(PromieData));
    }).catch((PromiseError) => {
        res.end(JSON.stringify(PromiseError));
    });
};

let CreateForMsSql = (req, res) => {
    let LocalUserPK = req.params.inUserPK;
    
    Repo.CreateForMsSql({
        inUserPK: LocalUserPK
    }).then((PromieData) => {
        res.end(JSON.stringify(PromieData));
    }).catch((PromiseError) => {
        res.end(JSON.stringify(PromiseError));
    });
};

module.exports = { CreateFromTemplateData, CreateFoldersOnly, CreateForMsSql };