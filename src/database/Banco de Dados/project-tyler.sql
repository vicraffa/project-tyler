drop database projecttyler;
create database projecttyler;
use projecttyler;


create table usuario (
id int primary key auto_increment,
nickname varchar(100) unique,
email varchar(100) unique,
senha varchar(45)
);

create table tentativaQuestionario (
id int auto_increment,
usuario_id int,
primary key (id, usuario_id),
constraint usuarioTentativaQuestionario foreign key (usuario_id) references usuario (id),
acertos int not null,
erros int not null,
dtRegistro datetime default current_timestamp
);

create table chat(
id int primary key auto_increment,
mensagem varchar(200),
usuario_id int,
constraint fkUsuarioChat foreign key (usuario_id) references usuario(id)
);

insert into usuario (nickname, email, senha) values
('jullya', 'jullya@email.com', 'Jullya@12345'),
('akira', 'akira@email.com', 'Akira@12345'),
('victor', 'victor@email.com', 'Victor@12345'),
('nicole', 'nicole@email.com', 'Nicole@12345'),
('arthur', 'arthur@email.com', 'Arthur@12345');

insert into tentativaQuestionario(usuario_id, acertos, erros) values
(1, 13, 17),
(1, 25, 5),
(2, 24, 6),
(3, 10, 20),
(4, 24, 6),
(4, 5, 25),
(5, 13, 17);

insert into chat (mensagem, usuario_id) values
('Oi, sempre gostei do Tyler, muito legal ter uma plataforma para conversar sobre ele.', 1),
('Oiii, boa noite gente, sou novo aqui!', 2),
('Oii, seja bem vindo, qual o album favorito de vocês?', 3),
('O meu é o Igor', 4),
('Gosto mais do novo Dont Tap The Glass', 5);

select * from usuario;
select * from tentativaQuestionario;
select * from chat;

CREATE VIEW rankingTentativas AS
SELECT u.nickname, MAX(t.acertos) AS pontuacao
        FROM tentativaQuestionario t
        JOIN usuario u ON t.usuario_id = u.id
        GROUP BY t.usuario_id, u.nickname
        ORDER BY pontuacao DESC
        LIMIT 8;

SELECT * FROM rankingTentativas;

select nickname,
		acertos,
        erros,
        dtRegistro
from tentativaQuestionario
join usuario on usuario.id = usuario_id;

select nickname, mensagem
from usuario
join chat on usuario.id = usuario_id
order by usuario.id asc;