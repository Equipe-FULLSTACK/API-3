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
		
		var sql = 'SELECT * FROM processes';
		con.query(sql, function (err, result, fields) {
			if (err) throw err;
			res.render('index', { title: 'Teste', dados: result});
		});
	});
});

app.get("/processo", (req, res) => {
	con.connect(function(err) {
		if (err) throw err;
		console.log("Conectado");
		console.log(req.query.id);
		var sql = 'SELECT * FROM tasks WHERE process = ?';
		con.query(sql, 2, function (err, result, fields) {
			if (err) throw err;
			res.render('process', { title: 'Teste', tasks: result});
		});
	});
});


app.listen(PORT, () => {
  console.log(`Servidor recebendo dados no port ${PORT}`);
});

