//packages
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors');
const fs = require('fs').promises;

const myapp = express();


myapp.use(bodyParser.urlencoded({extended:true}));
myapp.use(bodyParser.json());
myapp.use(cors());


const host = 'localhost';
const port = 3060;

//uses all files within my content(static files) folder
myapp.use(express.static(path.join(__dirname)));

//go to home page
myapp.get("/", (req, res) =>
{
	res.sendFile(path.join(__dirname,"index.html"));
});

//go to search page
myapp.get("/search", (req, res) =>
{
	res.sendFile(path.join(__dirname,"search.html"));
})

//go to fundraiser page
myapp.get("/fundraiser", (req, res) =>
{
	res.sendFile(path.join(__dirname,"fundraiser.html"));
})

//start server
myapp.listen(port, host, () => {
	//print line to confirm
    console.log(`Server is running on http://${host}:${port}`);
});





