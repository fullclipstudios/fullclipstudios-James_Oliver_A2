//connect to DB and serve request

//connect to DB
var db_connection = require ("../crowdfunding_db");

var connection = db_connection.getconnection();

connection.connect();

//use express module
var express = require("express");

var router = express.Router();


//get from fundraiser table
router.get("/",(req,res) =>{
	connection.query("SLECT * from fundraiser", (err, records, fields) =>{
		if (err){
			console.log("Error retrieving data from fundraiser table");
		}
		else{
			res.send(records);
			console.log(records);
		}
	})
})

//get by fundraiser ID
router.get("/:id",(req,res) =>{
	connection.query("SELECT * from fundraiser where FUNDRAISER_ID=" + request.params.id, (err, records, fields) =>{
		if (err){
			console.log("Error retrieving data by FUNDRAISER_ID");
		}
		else{
			
			res.send(records);
		}
	})
})



//get from category table
router.get("/",(req,res) =>{
	connection.query("SLECT * from category", (err, records, fields) =>{
		if (err){
			console.log("Error retrieving data from Category table");
		}
		else{
			res.send(records);
		}
	})
})

//get by category
router.get("/:id",(req,res) =>{
	connection.query("SELECT * from category where CATEGORY_ID=" + request.params.id, (err, records, fields) =>{
		if (err){
			console.log("Error retrieving data on Category_ID");
		}
		else{
			res.send(records);
		}
	})
})

//get by Active status
router.get("/:id",(req,res) =>{
	connection.query("SELECT * from fundraiser where ACTICE=true" + request.params.id, (err, records, fields) =>{
		if (err){
			console.log("Error retrieving Data on Active elemets");
		}
		else{
			res.send(records);
		}
	})
})

//export
module.exports=router;