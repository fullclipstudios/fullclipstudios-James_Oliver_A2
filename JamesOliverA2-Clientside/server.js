//packages
const http = require("http");
const express = require("express");
const fs = require('fs').promises;
const path = require("path");

//const server = http.createServer(requestLis);
const myapp = express();
const host = 'localhost';
const port = 8080;

//uses all files within my content(static files) folder
myapp.use(express.static(path.join(__dirname, "static files")));

/* const requestLis = function (req, res) {
    
	fs.readFile(__dirname + "/index.html")
	.then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
}; */

//start server
myapp.listen(port, host, () => {
	//print line to confirm
    console.log(`Server is running on http://${host}:${port}`);
});





