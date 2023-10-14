para selecionar uma task especifica
SELECT id FROM tasks WHERE process = ( SELECT id FROM processes WHERE name = 'Processo 03' ) AND name = 'Tarefa 03';
sendo que typeid de 2 = task

INSERT INTO users (admin, name, password, email) VALUES (1,'Pedro','12345','pz020609@gmail.com');
INSERT INTO users (name, password, email) VALUES ('Paulo', '54321', 'prrcardoso@gmail.com');


INSERT INTO processes (status, name, deadline) VALUES (1, 'Processo 01', '2023-09-24 23:59:59');
INSERT INTO processes (status, name, deadline) VALUES (2, 'Processo 02', '2023-09-22 16:00:00');
INSERT INTO processes (status, name, deadline, description) VALUES (1, 'Processo 03', '2023-09-29 20:00:00', 'Teste');

INSERT INTO tasks (process, status, name, deadline) VALUES (1, 2, 'Tarefa 01', '2023-09-24 23:59:59');
INSERT INTO tasks (process, status, name, deadline) VALUES (1, 1, 'Tarefa 02', '2023-09-24 23:59:59');
INSERT INTO tasks (process, status, name, deadline, description) VALUES (1, 1, 'Tarefa 03', '2023-09-24 23:59:59', 'Arquivos');

INSERT INTO tasks (process, status, name, deadline) VALUES (2, 2, 'Tarefa 01', '2023-09-20 16:00:00');
INSERT INTO tasks (process, status, name, deadline) VALUES (2, 2, 'Tarefa 02', '2023-09-20 18:00:00');

INSERT INTO tasks (process, status, name, deadline, description) VALUES (3, 1, 'Tarefa 01', '2023-09-29 20:00:00', 'Teste 1');
INSERT INTO tasks (process, status, name, deadline, description) VALUES (3, 1, 'Tarefa 02', '2023-09-29 20:00:00', 'Teste 2');
INSERT INTO tasks (process, status, name, deadline, description) VALUES (3, 1, 'Tarefa 03', '2023-09-29 20:00:00', 'Teste 3');

INSERT INTO evidences (task, status, name, description, type, url) VALUES (3, 1, 'URL 1', 'Link 1', 0, 'https://www.google.com');


INSERT INTO responsibles (user, type, typeid) VALUES (1, 2, 8);

INSERT INTO requirements (task, requires) VALUES (8, 6);
INSERT INTO requirements (task, requires) VALUES (8, 7);