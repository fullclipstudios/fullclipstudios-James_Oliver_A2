//connect to DB and serve request


//use express module
const express = require("express");
const router = express.Router();

//connect to DB
const db_connection = require ("../crowdfunding_db");

//establish connection
var connection = db_connection.getconnection();

//access database
connection.connect();

// Get all active fundraisers with category names, join from Category table
router.get("/", (req, res) => {
    const query = `SELECT f.*, c.NAME AS CATEGORY_NAME FROM fundraiser f 
     JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID WHERE f.ACTIVE = TRUE`;

	//handle errors
    connection.query(query, (err, records) => {
        if (err) {
            console.error("Error retrieving active fundraisers:", err);
            return;
        }
        res.json(records); 
    });
});



// Get all category names
router.get("/categories", (req, res) => {
    const query = "SELECT NAME FROM CATEGORY"; 
    connection.query(query, (err, records) => {
        //handle errors
		if (err) {
            console.error("Error while retrieving categories:", err);
            return;
        }

        if (records.length === 0) {
            return res.status(404).json({ message: "No categories found" });
        }

        const categoryNames = records.map(record => record.NAME);
        res.json(categoryNames);
    });
});

//get cities
router.get("/:city", (req, res) => {
    const city = req.params.city; 
    const query = `SELECT * FROM fundraiser WHERE CITY = '${city}'`; 
	//handle errors
    connection.query(query, (err, records) => {
        if (err) {
            console.error("Error while retrieving the data:", err);
           
        }

        if (records.length === 0) {
            return res.status(404).json({ message: "No fundraisers found for this city" });
        }

        res.json(records); 
    });
});


// Export the router
module.exports = router

//old code
/* //get only active from fundraiser tablel
router.get("/",(req,res) =>{
	connection.query("SELECT * FROM fundraiser WHERE ACTIVE =true", (err, records, fields) =>{
		if (err)
		{
			console.log("Error retrieving data from fundraiser table");
			return;
		}
		res.send(records);
		console.log(records);
		
	});
}); */

