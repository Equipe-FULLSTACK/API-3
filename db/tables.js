var mysql = require('mysql2');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "fatec",
	database: "db"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Conectado");
	
	/**/
	//USERS
	var sql = `CREATE TABLE users (
		id INT NOT NULL AUTO_INCREMENT,
		admin BOOLEAN DEFAULT 0, 
		name VARCHAR(127),
		password VARCHAR(64),
		email VARCHAR(255),
		image TEXT,
		PRIMARY KEY (id)
	)`;
	con.query(sql, function (err, result) {
		if (err) throw err;
	});
	
	
	
	//PROCESSES
	var sql = `CREATE TABLE processes (
		id INT NOT NULL AUTO_INCREMENT,
		status TINYINT,
		name VARCHAR(127),
		created DATETIME DEFAULT NOW(),
		deadline DATETIME,
		description TEXT,
		PRIMARY KEY (id)
	)`;
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela PROCESSES criada");
	});
	
	
	
	//TASKS
	var sql = `CREATE TABLE tasks (
		id INT NOT NULL AUTO_INCREMENT,
		process INT NOT NULL,
		status TINYINT, 
		name VARCHAR(127),
		created DATETIME DEFAULT NOW(),
		deadline DATETIME,
		description TEXT,
		PRIMARY KEY (id),
		FOREIGN KEY (process) REFERENCES processes(id)
	)`;
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela TASKS criada");
	});
	
	//EVIDENCES
	var sql = `CREATE TABLE evidences (
		id INT NOT NULL AUTO_INCREMENT,
		task INT NOT NULL,
		status TINYINT, 
		name VARCHAR(127),
		created DATETIME,
		description TEXT,
		type TINYINT,
		url TEXT,
		PRIMARY KEY (id),
		FOREIGN KEY (task) REFERENCES tasks(id)
	)`;
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela EVIDENCES criada");
	});
	
	
	//REQUIREMENTS
	var sql = `CREATE TABLE requirements (
		id INT NOT NULL AUTO_INCREMENT,
		task INT NOT NULL,
		requires INT NOT NULL, 
		PRIMARY KEY (id),
		FOREIGN KEY (task) REFERENCES tasks(id),
		FOREIGN KEY (requires) REFERENCES tasks(id)
	)`;
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela REQUIREMENTS criada");
	});
	
	
	
	//RESPONSIBLES, 1 = PROCESS, 2 = TASK, 3 = EVIDENCE
	var sql = `CREATE TABLE responsibles (
		id INT NOT NULL AUTO_INCREMENT,
		user INT NOT NULL,
		type TINYINT NOT NULL, 
		typeid INT NOT NULL,
		PRIMARY KEY (id),
		FOREIGN KEY (user) REFERENCES users(id)
	)`;
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela RESPONSIBLES criada");
	});
});