//packages
const express = require("express");
const cors = require("cors");
const path = require("path");
const crowdfundAPI = require("./controllerAPI/api-controller");
const myapp = express();
const host = 'localhost';
const port = 8080;


myapp.use(cors());
//uses all files within my content(static files) folder
myapp.use("/api/crowdfunding_db", crowdfundAPI);
myapp.use(express.static(path.join(__dirname, "static files")));

//start server
myapp.listen(port, host, () => {
	//print line to confirm
    console.log(`Server is running on http://${host}:${port}`);
});





