exports.Save = (req, res, next) => {
    if (("DataPk" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "DataPk not found in Request" })
        return;
    };

    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                UserName:"",
                PassWord:""
            },
        });
        return;
    };

    if (("UserName" in req.body) === false) {
        res.json({ KTF: false, KReason: "UserName not found in body" })
        return;
    };

    if (("PassWord" in req.body) === false) {
        res.json({ KTF: false, KReason: "PassWord not found in body" })
        return;
    };

    next();
};
