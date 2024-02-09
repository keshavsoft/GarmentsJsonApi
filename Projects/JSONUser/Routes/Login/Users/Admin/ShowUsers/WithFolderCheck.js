var express = require('express');
var router = express.Router();
let controllers = require("../../../../../controllers/Login/Users/Admin/ShowUsers/WithFolderCheck.Controllers");
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "");
    },
    filename: function (req, file, cb) {
        console.log("file : ", file);
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage });

router.get('/', controllers.FolderCheck);

router.post('/', upload.single("inFile"), controllers.PostFunc);

module.exports = router;