

var express = require('express');

//create web server
var app = express();

//connect with API controller
var fundraiserAPI = require("./controllerAPI/api-controller.js");

var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));

app.use("/api/fundraiser",fundraiserAPI);

//run web server
app.listen(3060);

console.log("Running on port 3060they");


