var express = require('express');
var router = express.Router();
let SubRouteAdmin = require('./Routes/Admin');
let CommonValidate = require('./Routes/Validate');
let CommonLogin = require('./Routes/Login');
let CommonInsert = require('./Routes/Insert');

//let CommonMiddlewareJwtVerify = require("../../common/Jwt/ForAdminDataJson");
let CommonMiddlewareJwtVerify = require("../../common/Jwt/ForUserManagement");

router.use('/Users', CommonMiddlewareJwtVerify.ForKeshavSoftRedirectToLogin, require('./Routes/Users'));
router.use('/Admin', SubRouteAdmin);
router.use('/Validate', CommonValidate);
router.use('/Login', CommonMiddlewareJwtVerify.ForKeshavSoftRedirectToLogin, CommonLogin);
router.use('/Insert', CommonInsert);

module.exports = router;
