var mysql = require('mysql2');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	port:3000,
	password: "password"
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