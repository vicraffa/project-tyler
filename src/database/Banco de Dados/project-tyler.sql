drop database projecttyler;
create database projecttyler;
use projecttyler;

create table album (
id int primary key auto_increment,
nome varchar(45),
descricao varchar(100),
img char(1)
);

create table usuario (
id int primary key auto_increment,
nickname varchar(100) unique,
email varchar(100) unique,
senha varchar(45),
album_id int,
constraint albumUsuario foreign key (album_id) references album (id)
);

create table tentativaQuestionario (
id int auto_increment,
usuario_id int,
primary key (id, usuario_id),
constraint usuarioTentativaQuestionario foreign key (usuario_id) references usuario (id),
pontuacao int,
dtRegistro datetime default current_timestamp
);

select * from usuario;

delete from usuario where id = 5;