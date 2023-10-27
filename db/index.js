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
	password: "password",
	database: "db"
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./')));
app.use(express.json());
app.use(helmet());
app.use(limiter);
app.use(cors());
app.set('view engine', 'ejs');


// FUNÇÃO PARA RECEBER OS JSON DOS PROCESSOS GERAIS NA ROTA localhost:3000/

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

// FUNÇÃO PARA RECEBER OS JSON DOS PROCESSOS NA ROTA localhost:3000/p

app.get("/p", (req, res) => {
	con.connect(function(err) {
		if (err) throw err;
		console.log("Conectado Processos");
		
		var sql = 'SELECT id, process, status, name, DATE_FORMAT(created, "%y-%m-%d %H:%i:%S") AS created, DATE_FORMAT(deadline, "%y-%m-%d %H:%i:%S") AS deadline, description FROM tasks WHERE process = ?';
		con.query(sql, req.url.substring(4), function (err, result, fields) {
			if (err) throw err;
			res.json(result);
		});
	});
});

// FUNÇÃO PARA RECEBER OS JSON DAS TASKS NA ROTA localhost:3000/t

app.get("/t", (req, res) => {
	con.connect(function(err) {
		if (err) throw err;
		console.log("Conectado Tasks");
		
		var sql = 'SELECT id, task, status, name, DATE_FORMAT(created, "%y-%m-%d %H:%i:%S") AS created, description, type, url FROM evidences WHERE task = ?';
		con.query(sql, req.url.substring(4), function (err, result, fields) {
			if (err) throw err;
			res.json(result);
		});
	});
});


// FUNÇÃO PARA RECEBER OS JSON DOS USUARIOS NA ROTA localhost:3000/us

app.get("/us", (req, res) => {
	con.connect(function(err) {
		if (err) throw err;
		console.log("Conectado Usuarios");
		
		var sql = 'SELECT id, admin, name, email FROM users';
		con.query(sql, function (err, result, fields) {
			if (err) throw err;
			res.json(result);
		});
	});
});


// FUNÇÃO QUE FAZ O CADASTRO DE NOVOS USUÁRIOS NO BANCO DE DADOS
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


// FUNÇÃO QUE CHECA SE O USUÁRIO E SUA SENHA CONSTAM NO BANCO DE DADOS PARA FAZER O LOGIN
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

// FUNÇÃO PARA CRIAR NOVOS PROCESSOS NO BANCO DE DADOS
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

