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

select * from usuario;

SELECT u.nickname, MAX(t.acertos) AS pontuacao
        FROM tentativaQuestionario t
        JOIN usuario u ON t.usuario_id = u.id
        GROUP BY t.usuario_id, u.nickname
        ORDER BY pontuacao DESC
        LIMIT 8;
        
        