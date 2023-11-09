
var session = require('express-session');
var cookieParser = require('cookie-parser');

var mysql = require('mysql2');
var express = require('express');
var http = require('http');
var path = require("path");
var bodyParser = require('body-parser');
var helmet = require('helmet');
var rateLimit = require("express-rate-limit");

/* var cors = require('cors'); */
var app = express();
var server = http.createServer(app);

const cors = require('cors');



const PORT = process.env.PORT || 3000;

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 200 // limit each IP to 100 requests per windowMs
});

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	/* password: "fatec", */
	password: "fatec",
	database: "db"
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './')));
app.use(express.json());
app.use(helmet());
app.use(limiter);
app.use(cors({
	origin: 'http://localhost:5173',
	methods: ['POST', 'GET','PUT', 'DELETE'],
	credentials: true
}));

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(session({
	secret: 'secret', //Chave gerada para o cookie de sessão
	resave: false,
	saveUninitialized: false,
	cookie: {
		secure: false,
		maxAge: 1000 * 60 * 60 * 24 //Tempo em milisegundos que o cookie vai durar
	}
}))


// FUNÇÃO PARA RECEBER OS JSON DOS PROCESSOS GERAIS NA ROTA localhost:3000/

app.get("/", (req, res) => {
	con.connect(function (err) {
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
	con.connect(function (err) {
		if (err) throw err;
		console.log("Dados solicitados para tabela de processos");

		var sql = 'SELECT id, active, status, name, DATE_FORMAT(CONVERT(created, date), "%d/%m/%Y") AS created, DATE_FORMAT(CONVERT(deadline, date), "%d/%m/%Y") AS deadline, description FROM processes';
		con.query(sql, req.url.substring(4), function (err, result, fields) {
			if (err) throw err;
			res.json(result);
		});
	});
});

// FUNÇÃO PARA RECEBER OS JSON DAS TASKS NA ROTA localhost:3000/t

app.get("/t", (req, res) => {
	con.connect(function (err) {
		if (err) throw err;
		console.log("Dados solicitados para tabela de tarefas");

		var sql = 'SELECT id, process, active, status, name, DATE_FORMAT(CONVERT(created, date), "%d/%m/%Y") AS created, DATE_FORMAT(CONVERT(deadline, date), "%d/%m/%Y") AS deadline, description FROM tasks';
		con.query(sql, req.url.substring(4), function (err, result, fields) {	
			if (err) throw err;
			res.json(result);
		});
	});
});



// FUNÇÃO PARA CRIAR NOVAS TAREFAS NO BANCO DE DADOS
app.post('/t', function (req, res) {
	const process = req.body.process;
	const active = req.body.active;
	const status = req.body.status;
	const name = req.body.name;
	const deadline = req.body.deadline;
	const description = req.body.description;

	const { authorization } = true;
  
	if (authorization) {
	  con.connect(function (err) {
		if (err) throw err;
		console.log("Inserindo tarefas no banco de dados");
  
		var sql = `INSERT INTO tasks (process, active, status, name, created, deadline, description) VALUES (${process}, ${active}, ${status}, ${name}, NOW(), ${deadline}, ${description})`
		con.query(sql, [task.name, task.deadline, task.description], function (err, result) {
		  if (err) throw err;
		  res.status(200).send({ message: "Tarefa criada com sucesso!" });
		});
	  });
	} else {
	  res.status(400).send({ message: "Falha de autenticação verificar credenciais" });
	}
  });


  app.put('/t/:id', function (req, res) {
	const taskId = req.params.id;
	const updatedTaskData = req.body;
	const { process, active, status, name, deadline, description } = updatedTaskData;
	const { authorization } = req.headers;


  
	if (authorization) {
	  con.connect(function (err) {
		if (err) throw err;
		console.log("Atualizando tarefa no banco de dados");
  
		var sql = `UPDATE tasks SET process = ?, active = ?, status = ?, name = ?, deadline = ?, description = ? WHERE id = ?`;
		con.query(sql, [process, active, status, name, deadline, description, taskId], function (err, result) {
		  if (err) throw err;
  
		  res.status(200).send({ message: "Tarefa atualizada com sucesso!" });
		});
	  });
	} else {
	  res.status(400).send({ message: "O nome e o prazo são obrigatórios!" });
	}
  });



// FUNÇÃO PARA RECEBER OS JSON DOS USUARIOS NA ROTA localhost:3000/us

app.get("/us", (req, res) => {
	con.connect(function (err) {
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
app.post('/register', function (req, res) {
	const { login, apelido, email, senha, tel } = req.body;
	const { authorization } = req.headers;
	if (login != "" && apelido != "" && email != "" && senha != "" && tel != "") {
		con.connect(function (err) {
			if (err) throw err;
			console.log("Inserindo");
			var sql = 'INSERT INTO users (admin, name, password, email, phone) VALUES (false, ?, ?, ?, ?)';
			con.query(sql, [login, senha, email, tel], function (err, result) {
				if (err) throw err;
			});
		});
	} else {
		console.log("Erro");
	}
	return res.redirect('http://localhost:5173/');
});


// FUNÇÃO QUE CHECA SE O USUÁRIO E SUA SENHA CONSTAM NO BANCO DE DADOS PARA FAZER O LOGIN
app.post('/login', function (req, res) {
	const { username, senha } = req.body; // Use req.body para acessar os valores enviados no corpo da solicitação

	con.connect(function (err) {
		if (err) throw err;

		console.log("Verificando Cadastro");
		const sql = 'SELECT * FROM users WHERE name = ? AND password = ?';
		con.query(sql, [username, senha], (err, result) => {
			if (err) return res.json({ Message: "Erro no servidor" });
			if (result.length > 0) {
				console.log(username);
				req.session.username = result[0].name;
				console.log(req.session.username, 'username')
				return res.json({ Login: true, username: req.session.username });
			} else {
				console.log('Usuário não encontrado', username, senha);
				return res.json({ Login: false });
			}
		});
	});
});


//FUNÇÃO PARA A CHECAGEM DE COOKIES DE USUARIO
app.get("/ck", (req, res) => {
	con.connect(function (err) {
		if (err) throw err;
		console.log("Buscando Cookies");

		if (req.session.username) {
			console.log('Achei')
			return res.json({ valid: true, username: req.session.username })
		} else {
			console.log('Não achei')
			return res.json({ valid: false })
		}
	});
});



// FUNÇÃO PARA CRIAR NOVOS PROCESSOS NO BANCO DE DADOS
app.post('/process', function (req, res) {
	const { name, deadline } = req.body;
	const { authorization } = req.headers;
	if (name != "" && deadline != "") {
		con.connect(function (err) {
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


//FUNÇÃO PARA ATUALIZAR O CAMPO ADMIN DE UM USUÁRIO NA PAGINA ADMIN
app.put('/atualizarAdmin/:userId', (req, res) => {
	const { userId } = req.params;
	const { admin } = req.body;

	// Execute a consulta SQL para atualizar o campo 'admin' para o usuário com o userId.
	var sql = 'UPDATE users SET admin = ? WHERE id = ?';

	con.query(sql, [admin, userId], (err, result) => {
		if (err) {
			console.error('Erro ao atualizar admin:', err);
			res.status(500).json({ message: 'Erro ao atualizar admin' });
		} else {
			res.json({ message: 'Admin atualizado com sucesso' });
		}
	});
});


app.listen(PORT, () => {
	console.log(`Servidor recebendo dados no port ${PORT}`);
});

