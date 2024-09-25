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

//API  Get all active fundraisers with category names, join from Category table
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



// API to get all category names
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

//API to get cities
router.get("/city/:city", (req, res) => {
    const city = req.params.city; 
    const query = `SELECT * FROM fundraiser WHERE CITY = '${city}' AND ACTIVE =1`; 
	//handle errors
    connection.query(query, (err, records) => {
        if (err) {
            console.error("Error while retrieving the data:", err);
           
        }
		//show message if no matches

        if (records.length === 0) {
            return res.json({ message: "No active fundraisers found for this city" });
        }

        res.json(records); 
    });
});

//API to get org
router.get("/organizer/:org", (req, res) => {
    const org= req.params.org; 
    const query = `SELECT * FROM fundraiser WHERE ORGANIZER = '${org}' AND ACTIVE =1`; 
	//handle errors
    connection.query(query, (err, records) => {
        if (err) {
            console.error("Error while retrieving the data:", err);
           
        }
		//show message if no matches

        if (records.length === 0) {
            return res.json({ message: "No active fundraisers by this organizer" });
        }

        res.json(records); 
    });
});

// API to get fundraisers by category
		router.get("/category/:cat", (req, res) => {
			const cat = req.params.cat; 

			
			if (!cat) {
				return res.json({ message: "Invalid category ID" });
			}

			const query = `
				SELECT f.*, c.NAME FROM fundraiser f 
				JOIN category c ON f.CATEGORY_ID = c.CATEGORY_ID 
				WHERE f.CATEGORY_ID = '${cat}' AND f.ACTIVE = 1
			`;
			connection.query(query, (err, records) => {
				if (err) {
					console.error("Error while retrieving the data:", err);
					return res.json({ message: "Server error" });
				}

				// Show message if no matches
				if (records.length === 0) {
					return res.json({ message: "No active fundraisers in this category" });
				}

				res.json(records); 
			});
		});

	
//API to get id
router.get("/ID/:id", (req, res) => {
    const org= req.params.id; 
    const query = `SELECT * FROM fundraiser WHERE FUNDRAISER_ID = '${org}' AND ACTIVE =1`; 
	//handle errors
    connection.query(query, (err, records) => {
        if (err) {
            console.error("Error while retrieving the data:", err);
           
        }
		//show message if no matches

        if (records.length === 0) {
            return res.json({ message: "No active fundraisers with this ID" });
        }

        res.json(records); 
    });
});




//not working??
/* router.get("/fundraiser/:id", (req, res)=>{
	connection.query("select * from concert where FUNDRAISER_ID =" + req.params.id, (err, records,fields)=> {
		 if (err){
			 console.error("Error while retrieve the data");
		 }else{
			 res.send(records);
		 }
	})
}) */


// Export the router
module.exports = router


