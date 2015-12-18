var express=require("express")
var config=require("config");
var serverConfig = config.get('core.server');

var app = express();

app.get('/', function (req, res) {

    res.end("Hello world !");

});

app.listen(serverConfig.port, function () {

    console.log("Running at PORT " + serverConfig.port);

});


