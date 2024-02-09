exports.ForUserNameAndPassword = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                inUserName: "",
                inPassWord: ""
            }
        });

        return;
    };

    if (("inUserName" in req.body) === false) {
        res.json({ KTF: false, KReason: "inUserName not found in body" })
        return;
    };
    if (("inPassWord" in req.body) === false) {
        res.json({ KTF: false, KReason: "inPassWord not found in body" });
        return;
    };

    next();
}; 
