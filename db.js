var mysql = require('mysql2');

var con = mysql.createConnection({
	host: "localhost",
	user: "fullstack",
	password: "senhadaora123"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Conectado");
	
	var sql = "CREATE DATABASE db";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Database DB criada");
	});
});