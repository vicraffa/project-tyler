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
foreign key (usuario_id) references usuario (id),
acertos int not null,
erros int not null,
dtRegistro datetime default current_timestamp
);

create table mensagem(
id int primary key auto_increment,
mensagem varchar(450) not null,
usuario_id int,
foreign key (usuario_id) references usuario(id)
);

insert into usuario (nickname, email, senha) values
('jullya', 'jullya@email.com', 'Jullya@12345'),
('akira', 'akira@email.com', 'Akira@12345'),
('victor', 'victor@email.com', 'Victor@12345'),
('nicole', 'nicole@email.com', 'Nicole@12345'),
('arthur', 'arthur@email.com', 'Arthur@12345'),
('clederson', 'clederson@email.com', 'Clederson@12345'),
('jonas', 'jonas@email.com', 'Jonas@12345'),
('plederson', 'plederson@email.com', 'Plederson@12345'),
('igonas', 'igonas@email.com', 'igonas@12345');

insert into tentativaQuestionario (usuario_id, acertos, erros) values
(1, 8, 4),
(1, 10, 2),
(2, 5, 7),
(3, 6, 6),
(4, 6, 6),
(4, 5, 7),
(6, 3, 4),
(7, 3, 6),
(8, 5, 5);

insert into mensagem ( mensagem, usuario_id) values
('Oi, sempre gostei do Tyler, muito legal ter uma plataforma para conversar sobre ele.', 1),
('Oiii, boa noite gente, sou novo aqui!', 2),
('Oii, seja bem vindo, qual o album favorito de vocês?', 3),
('O meu é o Igor', 4),
('Gosto mais do novo Dont Tap The Glass', 5);

select * from usuario;
select * from tentativaQuestionario;
select * from mensagem;


select nickname,
		acertos,
        erros,
        dtRegistro
from tentativaQuestionario
join usuario on usuario.id = usuario_id;

create view exibirKpis as
select 	usuario_id as `user`,
		count(usuario_id) as quantidadeTentativas, 
		sum(erros) as quantidadeErros, 
        max(acertos) as melhorPontuacao,
        sum(acertos) as quantidadeAcertos,
        round(sum(acertos) / sum(acertos + erros), 2)  as taxaAcerto
from tentativaQuestionario
group by (usuario_id);

select * from exibirKpis
where user = 1;

create view rankingTentativas as
select u.nickname, MAX(t.acertos) as pontuacao
        from tentativaQuestionario t
        join usuario u on t.usuario_id = u.id
        group by t.usuario_id, u.nickname
        order by pontuacao desc
        limit 8;
        
select * from rankingTentativas;

select acertos, dtRegistro from tentativaQuestionario
where usuario_id = 5
order by acertos desc
limit 5;

select nickname, mensagem from mensagem
join usuario on usuario.id = usuario_id
order by mensagem.id;