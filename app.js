let CommonProjectNameForJSONApi = "JSONApi";
let CommonProjectNameForJSONUser = "JSONUser";

let CommonProjectNameForJSONUtility = "JSONUtility";

let Commoncontrollers = require("./controllers/missedAll.controller");
let CommonHomeController = require("./StartUp/Home.controller");
let CommonPortListen = require("./PortListen");

require('dotenv').config();

const express = require('express');
const http = require('http');
const app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || '4119');

let SubRouteJSONApi = require(`./Projects/${CommonProjectNameForJSONApi}/Routes`);

let SubRouteJSONUser = require(`./Projects/${CommonProjectNameForJSONUser}/Routes`);
let SubRouteJSONUtility = require(`./Projects/${CommonProjectNameForJSONUtility}/Routes`);

app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, 'public')))

app.use(express.json({ limit: '100mb' }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + `/public/Garments/Index/Index.html`));
});

app.use(`/${CommonProjectNameForJSONApi}`, SubRouteJSONApi);

app.use(`/${CommonProjectNameForJSONUser}`, SubRouteJSONUser);
app.use(`/${CommonProjectNameForJSONUtility}`, SubRouteJSONUtility);

app.get('/*', Commoncontrollers.getUrl);
app.post('/*', Commoncontrollers.postUrl);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, CommonPortListen);
