CREATE DATABASE vegvin;
USE vegvin;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(20),
    email VARCHAR(45),
    senha VARCHAR(25),
    dtNasc DATE,
    imagemPerfil VARCHAR(45)
);

CREATE TABLE topico (
	idTopico INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50),
	categoria VARCHAR(30),
    CONSTRAINT chk_categoria CHECK (categoria IN('geral', 'arcos-e-personagens', 'filosofia', 'teorias', 'artes')),
    fk_usuario INT,
    CONSTRAINT fkUsuarioTopico FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);
ALTER TABLE topico ADD COLUMN dataPublicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

CREATE TABLE comentario (
	idComentario INT PRIMARY KEY AUTO_INCREMENT,
    comentarioTexto VARCHAR (255),
	comentarioImagem VARCHAR(45),
    fk_topicos INT,
	fk_usuario INT,
    CONSTRAINT fkComentarioTopico FOREIGN KEY (fk_topicos) REFERENCES topico(idTopico),
    CONSTRAINT fkUsuario FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);