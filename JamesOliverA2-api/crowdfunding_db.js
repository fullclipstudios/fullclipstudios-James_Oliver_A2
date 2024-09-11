//Use the mysql2 library
const mysql = require("mysql2");

//set up database connection
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "SWANSAFl123!",
	database: "crowdfunding_db"
});

//display connection success message in terminal
connection.connect((err) =>{
	if (err) throw err;
	console.log(">>--Connection Established--<<");
});

//send mysql command
connection.query('SELECT * FROM Fundraiser',
	(err,rows) => {
		if (err) throw err;
	console.log("Data received from DataBase");
	console.log(rows);
	
	rows.forEach((row) =>{
	console.log(`${row.ORGANIZER}'s caption is ${row.CAPTION}`);
	})
	});