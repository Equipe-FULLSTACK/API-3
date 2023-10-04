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
	user: "root",
	password: "password",
	database: "db"
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./')));
app.use(helmet());
app.use(limiter);


app.post("/process", (req, res) => {
	con.connect(function(err) {
		if (err) throw err;
		console.log("Conectado");
		
		if (req.body.processID == '') {
			var sql = 'SELECT * FROM processes';
		} else {
			var sql = 'SELECT * FROM processes WHERE id = ?;';
		}
		con.query(sql, [req.body.processID], function (err, result, fields) {
			if (err) throw err;
			console.log([req.body.processID]);
			res.json(result);
		});
	});
});
app.get("/process", (req, res) => {
	res.sendFile(path.join(__dirname,'./process.html'));
});



app.listen(PORT, () => {
  console.log(`Servidor recebendo dados no port ${PORT}`);
});

