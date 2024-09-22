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


//get data from categories table
router.get("/",(req,res) =>{
	connection.query("SELECT * FROM category", (err, records, fields) =>{
		if (err){
			console.log("Error retrieving data from categories table");
			return;
		}
		res.send(records);
		console.log(records);
		
	});
});

router.get("/:city", (req, res) => {
    const city = req.params.city;
    const results = fundraisers.filter(f => f.CITY.toLowerCase() === city.toLowerCase());
    res.json(results);
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
