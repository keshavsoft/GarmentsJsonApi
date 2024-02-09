let Repo = require("../../../../Repository/Users/Api/Show/SteUpUsers");

let GetFunc = async (req, res) => {

    let PromiseData = await Repo.ShowData()
    res.json(PromiseData);
};

module.exports = { GetFunc }