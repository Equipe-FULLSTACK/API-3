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
	
	//DADOS GENÉRICOS PROCESSOS
	var sql = `INSERT INTO processes (active, status, name, created, deadline, description) VALUES 
	(1, 'Atrasada', 'Processo 1', NOW(), '2023-12-31', 'Criação sistema documentação para departamento de vendas.'),
	(1, 'Andamento', 'Processo 2', NOW(), '2023-11-15', 'Implementação de novas políticas de segurança da informação.'),
	(0, 'Concluida', 'Processo 3', NOW(), '2023-10-20', 'Treinamento de novos funcionários para a equipe de suporte técnico.'),
	(1, 'Atrasada', 'Processo 4', NOW(), '2023-09-30', 'Desenvolvimento de um aplicativo móvel para clientes.'),
	(1, 'Andamento', 'Processo 5', NOW(), '2023-11-10', 'Planejamento e organização de um evento corporativo.'),
	(0, 'Concluida', 'Processo 6', NOW(), '2023-08-25', 'Revisão e atualização da política de privacidade da empresa.'),
	(1, 'Atrasada', 'Processo 7', NOW(), '2023-09-15', 'Implementação de um sistema de gerenciamento de projetos.'),
	(1, 'Andamento', 'Processo 8', NOW(), '2023-11-05', 'Desenvolvimento de um novo produto para o mercado.'),
	(0, 'Concluida', 'Processo 9', NOW(), '2023-10-05', 'Análise de mercado para identificação de oportunidades de negócios.'),
	(1, 'Atrasada', 'Processo 10', NOW(), '2023-12-05', 'Elaboração de um plano estratégico para o próximo ano.');`;

	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Inserido dados processos genéricos para aplicação.");
	});


	//DADOS DE ROLES
	var sql =`INSERT INTO roles (id, name, editroles, editusers, editprocesses, edittasks, edittemplates, editevidences, viewprocesses, viewtasks, viewevidences) VALUES 
	('1', 'admin', '1', '1', '1', '1', '1', '1', '1', '1', '1'),
	('2', 'gerente', '0', '0', '1', '1', '1', '1', '1', '1', '1'),
	('3', 'desenvolvedor', '0', '0', '0', '1', '1', '1', '1', '1', '1'),
	('4', 'c-level', '0', '0', '0', '0', '0', '0', '1', '1', '1');`;

	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Inserido dados de roles para aplicação.");
	});


	// CREATE DEFAULT USERS
	var sql = `INSERT INTO users (admin, name, nickname, password, phone, email, image, role) VALUES 
	(1, "admin", "admin", "admin", "129999-9999", "admin@admin.com.br", "https://avatars.githubusercontent.com/u/127335772?v=4", 1),
	(1, "leo", "leo", "leo", "123-456", "leo@leo.com", "", 3),
	(1, "pedro", "pedro", "pedro", "654-321", "pedro@pedro.com", "", 2),
	(1, "thiago", "thiago", "thiago", "456-123", "thiago@thiago.com", "", 3),
	(1, "juliano", "juliano", "juliano", "123-456", "juliano@juliano.com", "", 2),
	(1, "ian", "ian", "ian", "123-456", "ian@ian.com", "", 3),
	(1, "jean", "jean", "jean", "123-456", "jean@jean.com", "", 3);`;
	
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Criado usuários padrão");
	});

	//DADOS GENÉRICOS TASKS
	var sql = `INSERT INTO tasks (process, active, status, name, created, deadline, description) VALUES 
	(1, 1, 'Andamento', 'Task 1: Revisar requisitos', NOW(), '2023-11-10', 'Revisão dos requisitos para o sistema de documentação de vendas'),
	(1, 1, 'Pendente', 'Task 2: Criar protótipo', NOW(), '2023-11-15', 'Criar um protótipo do sistema de documentação de vendas'),
	(1, 1, 'Pendente', 'Task 3: Desenvolver funcionalidades', NOW(), '2023-11-20', 'Desenvolver as funcionalidades do sistema de documentação de vendas'),
	(1, 1, 'Concluida', 'Task 4: Testes de qualidade', NOW(), '2023-11-25', 'Realizar testes de qualidade no sistema de documentação de vendas'),
	(1, 1, 'Atrasada', 'Task 5: Implementar melhorias', NOW(), '2023-11-30', 'Implementar melhorias no sistema de documentação de vendas'),
	(2, 1, 'Andamento', 'Task 1: Avaliação de Riscos', NOW(), '2023-11-12', 'Realizar uma avaliação detalhada dos riscos de segurança da informação'),
	(2, 1, 'Pendente', 'Task 2: Elaboração de Políticas', NOW(), '2023-11-18', 'Elaborar novas políticas de segurança da informação em conformidade com as regulamentações'),
	(2, 1, 'Pendente', 'Task 3: Treinamento dos Funcionários', NOW(), '2023-11-22', 'Realizar treinamento para os funcionários sobre as novas políticas e práticas de segurança'),
	(2, 1, 'Concluida', 'Task 4: Implementação de Ferramentas', NOW(), '2023-11-26', 'Implementar ferramentas de segurança da informação para proteger dados sensíveis'),
	(2, 1, 'Atrasada', 'Task 5: Monitoramento Contínuo', NOW(), '2023-11-28', 'Estabelecer um sistema de monitoramento contínuo para detectar e responder a incidentes de segurança'),
	(3, 1, 'Andamento', 'Task 1: Preparação de Materiais', NOW(), '2023-11-14', 'Preparar materiais de treinamento para os novos funcionários'),
	(3, 1, 'Pendente', 'Task 2: Agendamento de Sessões', NOW(), '2023-11-20', 'Agendar sessões de treinamento para os novos funcionários'),
	(3, 1, 'Pendente', 'Task 3: Introdução à Empresa', NOW(), '2023-11-25', 'Realizar uma introdução à empresa para os novos funcionários'),
	(3, 1, 'Concluida', 'Task 4: Treinamento Técnico', NOW(), '2023-11-28', 'Conduzir treinamento técnico para as habilidades necessárias no suporte técnico'),
	(3, 1, 'Atrasada', 'Task 5: Avaliação de Desempenho', NOW(), '2023-11-30', 'Realizar avaliação de desempenho para medir o progresso dos novos funcionários'),
	(4, 1, 'Andamento', 'Task 1: Requisitos do Cliente', NOW(), '2023-11-16', 'Realizar reuniões com os clientes para entender os requisitos do aplicativo móvel'),
	(4, 1, 'Pendente', 'Task 2: Design de Interface', NOW(), '2023-11-21', 'Criar o design da interface do usuário para o aplicativo móvel'),
	(4, 1, 'Pendente', 'Task 3: Desenvolvimento Front-end', NOW(), '2023-11-26', 'Desenvolver a parte visual e interativa do aplicativo móvel'),
	(4, 1, 'Concluida', 'Task 4: Desenvolvimento Back-end', NOW(), '2023-11-29', 'Construir a lógica e a funcionalidade do servidor para suportar o aplicativo móvel'),
	(4, 1, 'Atrasada', 'Task 5: Testes e Depuração', NOW(), '2023-12-01', 'Realizar testes extensivos no aplicativo móvel e corrigir quaisquer problemas identificados'),
	(5, 1, 'Andamento', 'Task 1: Definir Objetivos e Tema', NOW(), '2023-11-10', 'Definir os objetivos e o tema do evento corporativo'),
	(5, 1, 'Pendente', 'Task 2: Local e Data', NOW(), '2023-11-15', 'Escolher o local e a data para o evento corporativo'),
	(5, 1, 'Pendente', 'Task 3: Programação e Palestrantes', NOW(), '2023-11-20', 'Elaborar a programação do evento e selecionar palestrantes e apresentadores'),
	(5, 1, 'Concluida', 'Task 4: Logística e Preparação', NOW(), '2023-11-25', 'Organizar a logística e preparar os materiais e recursos necessários'),
	(5, 1, 'Atrasada', 'Task 5: Promoção e Registro', NOW(), '2023-11-30', 'Promover o evento e gerenciar o registro dos participantes'),
	(6, 1, 'Andamento', 'Task 1: Avaliação da Política Atual', NOW(), '2023-11-15', 'Avaliar a política de privacidade atual da empresa'),
	(6, 1, 'Pendente', 'Task 2: Pesquisa de Leis e Regulamentações', NOW(), '2023-11-20', 'Pesquisar novas leis e regulamentações de privacidade para garantir conformidade'),
	(6, 1, 'Pendente', 'Task 3: Revisão e Redação', NOW(), '2023-11-25', 'Revisar e reescrever a política de privacidade para incorporar as mudanças necessárias'),
	(6, 1, 'Concluida', 'Task 4: Revisão Legal', NOW(), '2023-11-28', 'Obter revisão legal da nova política de privacidade'),
	(6, 1, 'Atrasada', 'Task 5: Comunicação e Implementação', NOW(), '2023-12-01', 'Comunicar as mudanças aos stakeholders e implementar a nova política de privacidade'),
	(7, 1, 'Andamento', 'Task 1: Avaliação de Requisitos', NOW(), '2023-11-15', 'Avaliar os requisitos e necessidades da equipe para o sistema de gerenciamento de projetos'),
	(7, 1, 'Pendente', 'Task 2: Seleção de Software', NOW(), '2023-11-20', 'Pesquisar e selecionar um software de gerenciamento de projetos que atenda aos requisitos da empresa'),
	(7, 1, 'Pendente', 'Task 3: Configuração e Personalização', NOW(), '2023-11-25', 'Configurar e personalizar o software de gerenciamento de projetos de acordo com as necessidades da equipe'),
	(7, 1, 'Concluida', 'Task 4: Treinamento da Equipe', NOW(), '2023-11-28', 'Treinar a equipe para utilizar efetivamente o novo sistema de gerenciamento de projetos'),
	(7, 1, 'Atrasada', 'Task 5: Testes e Implementação', NOW(), '2023-12-01', 'Realizar testes finais e implementar o sistema de gerenciamento de projetos em toda a organização'),
	(8, 1, 'Andamento', 'Task 1: Pesquisa de Mercado', NOW(), '2023-11-05', 'Realizar pesquisa de mercado para identificar demanda e preferências dos clientes'),
	(8, 1, 'Pendente', 'Task 2: Design e Prototipagem', NOW(), '2023-11-10', 'Criar o design do produto e desenvolver protótipos para avaliação e teste'),
	(8, 1, 'Pendente', 'Task 3: Desenvolvimento do Produto', NOW(), '2023-11-15', 'Desenvolver o produto com base no design e nos protótipos aprovados'),
	(8, 1, 'Concluida', 'Task 4: Testes de Qualidade', NOW(), '2023-11-20', 'Realizar testes de qualidade para garantir que o produto atenda aos padrões estabelecidos'),
	(8, 1, 'Atrasada', 'Task 5: Lançamento e Marketing', NOW(), '2023-11-25', 'Preparar o lançamento do produto no mercado e iniciar estratégias de marketing para promovê-lo'),
	(9, 1, 'Andamento', 'Task 1: Definição de Objetivos', NOW(), '2023-10-05', 'Definir os objetivos da análise de mercado e as métricas de sucesso'),
	(9, 1, 'Pendente', 'Task 2: Coleta de Dados', NOW(), '2023-10-10', 'Coletar dados relevantes do mercado, concorrentes e clientes potenciais'),
	(9, 1, 'Pendente', 'Task 3: Análise Competitiva', NOW(), '2023-10-15', 'Realizar análise competitiva para identificar pontos fortes e fracos dos concorrentes'),
	(9, 1, 'Concluida', 'Task 4: Identificação de Oportunidades', NOW(), '2023-10-20', 'Analisar dados para identificar oportunidades de negócios no mercado'),
	(9, 1, 'Atrasada', 'Task 5: Relatório e Recomendações', NOW(), '2023-10-25', 'Preparar um relatório detalhado com análises e recomendações baseadas nos resultados obtidos'),
	(10, 1, 'Andamento', 'Task 1: Avaliação do Desempenho Atual', NOW(), '2023-11-05', 'Avaliar o desempenho atual da empresa, identificar áreas de melhoria e pontos fortes'),
	(10, 1, 'Pendente', 'Task 2: Definição de Metas e Objetivos', NOW(), '2023-11-10', 'Definir metas e objetivos claros e alcançáveis para o próximo ano'),
	(10, 1, 'Pendente', 'Task 3: Análise SWOT', NOW(), '2023-11-15', 'Realizar uma análise SWOT para identificar as forças, fraquezas, oportunidades e ameaças da empresa'),
	(10, 1, 'Concluida', 'Task 4: Estratégias e Iniciativas', NOW(), '2023-11-20', 'Desenvolver estratégias e iniciativas para alcançar as metas e objetivos estabelecidos'),
	(10, 1, 'Atrasada', 'Task 5: Plano de Implementação', NOW(), '2023-11-25', 'Criar um plano detalhado de implementação, incluindo responsabilidades, prazos e recursos necessários');`;
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Inserido dados tarefas genéricos para aplicação.");
	});
});
