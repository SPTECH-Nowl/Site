create database nowl;
use nowl;


create table usuario (
idusuario int primary key auto_increment,
nome varchar(45) not null,
email varchar(100) unique not null,
senha varchar(40) not null,
confirmação_senha varchar(40) not null,
codigo VARBINARY (6) not null
);


select * from usuario;
