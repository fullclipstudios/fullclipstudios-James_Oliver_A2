//read db details file
var dbDetails = require("./db_details");

//connect to mysql
var mysql = require("mysql2");

var bodyParser = require("body-parser");

//connect to db
module.exports =
{
	getconnection:() => {
		return mysql.createConnection({
			host:dbDetails.host,
			user:dbDetails.user,
			password:dbDetails.password,
			database:dbDetails.database
		});
	}
}







/* //Use the mysql2 library
const mysql = require("mysql2");

//set up database connection
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "SWANSAFl123!",
	database: "crowdfunding_db"
});

//display connection success message in terminal
mysql.connect((err) =>{
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
	
// insert into database
const fundraiser = {FUNDRAISER_ID: 12345, ORGANIZER: "new", CAPTION: "your caption", TARGET_FUNDING: 12345, CURRENT_FUNDING: 12345, CITY: "Syd", ACTIVE: true, CATEGORY_ID: 1};
connection.query("INSERT INTO Fundraiser SET ?", fundraiser, (err, res) =>{
if (err) throw err;
console.log("Last inserted ID:", res.insertId);
}
); */