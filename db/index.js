var mysql = require('mysql2');
var express = require('express');
var http = require('http');
var path = require("path");
var bodyParser = require('body-parser');
var helmet = require('helmet');
var rateLimit = require("express-rate-limit");

var cors = require('cors');
var app = express();
var server = http.createServer(app);

const PORT = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200 // limit each IP to 100 requests per windowMs
});

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Fla*741137a",
	database: "db"
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./')));
app.use(express.json());
app.use(helmet());
app.use(limiter);
app.use(cors());
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
	con.connect(function(err) {
		if (err) throw err;
		console.log("Conectado");
		
		var sql = 'SELECT id, status, name, DATE_FORMAT(created, "%y-%m-%d %H:%i:%S") AS created, DATE_FORMAT(deadline, "%y-%m-%d %H:%i:%S") AS deadline, description FROM processes';
		con.query(sql, function (err, result, fields) {
			if (err) throw err;
			res.json(result);
		});
	});
});

app.get("/p", (req, res) => {
	con.connect(function(err) {
		if (err) throw err;
		console.log("Conectado");
		
		var sql = 'SELECT id, process, status, name, DATE_FORMAT(created, "%y-%m-%d %H:%i:%S") AS created, DATE_FORMAT(deadline, "%y-%m-%d %H:%i:%S") AS deadline, description FROM tasks WHERE process = ?';
		con.query(sql, req.url.substring(4), function (err, result, fields) {
			if (err) throw err;
			res.json(result);
		});
	});
});

app.get("/t", (req, res) => {
	con.connect(function(err) {
		if (err) throw err;
		console.log("Conectado");
		
		var sql = 'SELECT id, task, status, name, DATE_FORMAT(created, "%y-%m-%d %H:%i:%S") AS created, description, type, url FROM evidences WHERE task = ?';
		con.query(sql, req.url.substring(4), function (err, result, fields) {
			if (err) throw err;
			res.json(result);
		});
	});
});

app.post('/register', function(req, res){
	const { login, apelido, email, senha } = req.body;
	const { authorization } = req.headers;
	if (login != "" && apelido != "" && email != "" && senha != ""){
		con.connect(function(err) {
		if (err) throw err;
		console.log("Inserindo");
		var sql = 'INSERT INTO users (admin, name, password, email) VALUES (false, ?, ?, ?)';
		con.query(sql, [login, senha, email], function (err, result) {
			if (err) throw err;
		});
	});
	} else {
		console.log("Erro");
	}
	return res.redirect('http://localhost:5173/');
});

app.post('/login', function(req, res){
	const { login, senha } = req.body;
	const { authorization } = req.headers;
	con.connect(function(err) {
		if (err) throw err;
		console.log("Inserindo");
		var sql = 'SELECT * FROM users WHERE name = ? AND password = ?';
		con.query(sql, [login, senha], function (err, result) {
			if (err) throw err;
			if (result[0] != null){
				var name = result[0].name;
				var password = result[0].password;
				if (login == name && senha == password ){
					return res.redirect('http://localhost:5173/processos');
				} else {
					return res.redirect('http://localhost:5173/');
				}
			} else {
				return res.redirect('http://localhost:5173/');	
			}
		});
	});
});

app.post('/process', function(req, res){
	const { name, deadline } = req.body;
	const { authorization } = req.headers;
	if (name != "" && deadline != ""){
		con.connect(function(err) {
		if (err) throw err;
		console.log("Inserindo");
		var sql = 'INSERT INTO processes (status, name, created, deadline) VALUES (0, ?, NOW(), ?)';
		con.query(sql, [name, deadline], function (err, result) {
			if (err) throw err;
		});
	});
	} else {
		console.log("Erro");
	}
	return res.redirect('http://localhost:5173/');
});


app.listen(PORT, () => {
  console.log(`Servidor recebendo dados no port ${PORT}`);
});

