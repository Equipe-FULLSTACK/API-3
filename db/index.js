var mysql = require('mysql2');
var express = require('express');
var http = require('http');
var path = require("path");
var bodyParser = require('body-parser');
var helmet = require('helmet');
var rateLimit = require("express-rate-limit");

var app = express();
var server = http.createServer(app);

const PORT = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200 // limit each IP to 100 requests per windowMs
});

var con = mysql.createConnection({
	host: "localhost",
	user: "fullstack",
	password: "senhadaora123",
	database: "db"
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./')));
app.use(helmet());
app.use(limiter);
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
	con.connect(function(err) {
		if (err) throw err;
		console.log("Conectado");
		
		var sql = 'SELECT id, status, name, DATE_FORMAT(created, "%y-%m-%d %H:%i:%S") AS created, DATE_FORMAT(deadline, "%y-%m-%d %H:%i:%S") AS deadline, description FROM processes';
		con.query(sql, function (err, result, fields) {
			if (err) throw err;
			//console.log(result);
			res.render('index', { dadosp: result });
		});
	});
});
app.post("/", (req, res) => {
	con.connect(function(err) {
		if (err) throw err;
		console.log("Conectado");
		
		var sql = 'INSERT INTO processes (status, name, deadline, description) VALUES (?)';
		var values = [req.body.status, req.body.name, req.body.deadline, req.body.description];
		con.query(sql, [values], function (err, result, fields) {
			if (err) throw err;
		});
		
		var sql = 'SELECT id, status, name, DATE_FORMAT(created, "%y-%m-%d %H:%i:%S") AS created, DATE_FORMAT(deadline, "%y-%m-%d %H:%i:%S") AS deadline, description FROM processes';
		con.query(sql, function (err, result, fields) {
			if (err) throw err;
			//console.log(result);
			res.render('index', { dadosp: result });
		});
	});
});

app.get("/p", (req, res) => {
	con.connect(function(err) {
		if (err) throw err;
		console.log("Conectado");

		var result2 = 0;
		var sql = 'SELECT id, status, name, DATE_FORMAT(created, "%y-%m-%d %H:%i:%S") AS created, DATE_FORMAT(deadline, "%y-%m-%d %H:%i:%S") AS deadline, description FROM processes WHERE id = ?';
		con.query(sql, req.url.substring(4), function (err, result, fields) {
			if (err) throw err;
			result2 = result;
		});
		
		var sql = 'SELECT id, process, status, name, DATE_FORMAT(created, "%y-%m-%d %H:%i:%S") AS created, DATE_FORMAT(deadline, "%y-%m-%d %H:%i:%S") AS deadline, description FROM tasks WHERE process = ?';
		con.query(sql, req.url.substring(4), function (err, result, fields) {
			if (err) throw err;
			console.log(result2);
			
			res.render('process', { dadost: result, dadosp: result2 });
		});
	});
});


app.listen(PORT, () => {
  console.log(`Servidor recebendo dados no port ${PORT}`);
});

