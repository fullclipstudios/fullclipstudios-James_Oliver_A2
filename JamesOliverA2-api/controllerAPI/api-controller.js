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



//get all data from fundraiser table
router.get("/",(req,res) =>{
	connection.query("SELECT * FROM fundraiser", (err, records, fields) =>{
		if (err){
			console.log("Error retrieving data from fundraiser table");
			return;
		}
		res.send(records);
		console.log(records);
		
	});
});




// Get all data from the fundraiser table by city
router.get("/:city", (req, res) => {
    const city = req.params.city; // Get the city from the URL parameter

    // Use parameterized query to prevent SQL injection
    const query = "SELECT * FROM fundraiser WHERE CITY = ?";
    connection.query(query, [city], (err, records) => {
        if (err) {
            console.error("Error while retrieving data:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        // If no records are found, respond with an empty array
        if (records.length === 0) {
            return res.status(404).json({ message: "No fundraisers found for this city" });
        }

        res.json(records); // Send records as JSON
    });
});


//export
module.exports=router;

//* /get by fundraiser ID
/* router.get("/:id",(req,res) =>{
	connection.query("SELECT * from fundraiser where FUNDRAISER_ID=" + request.params.id, (err, records, fields) =>{
		if (err){
			console.log("Error retrieving data by FUNDRAISER_ID");
		}
		else{
			
			res.send(records);
		}
	})
}) */



//get from category table
/* router.get("/",(req,res) =>{
	connection.query("SLECT * from category", (err, records, fields) =>{
		if (err){
			console.log("Error retrieving data from Category table");
		}
		else{
			res.send(records);
		}
	})
}) */

//get by category
/* router.get("/:id",(req,res) =>{
	connection.query("SELECT * from category where CATEGORY_ID=" + request.params.id, (err, records, fields) =>{
		if (err){
			console.log("Error retrieving data on Category_ID");
		}
		else{
			res.send(records);
		}
	})
}) */

//get by Active status
/* router.get("/:id",(req,res) =>{
	connection.query("SELECT * from fundraiser where ACTICE=true" + request.params.id, (err, records, fields) =>{
		if (err){
			console.log("Error retrieving Data on Active elemets");
		}
		else{
			res.send(records);
		}
	})
})  */
