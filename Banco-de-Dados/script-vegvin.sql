CREATE DATABASE vegvin;
USE vegvin;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(20),
    email VARCHAR(45),
    senha VARCHAR(25),
    dtNasc DATE
);

CREATE TABLE topico (
	idTopico INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50),
	categoria VARCHAR(30),
    CONSTRAINT chk_categoria CHECK (categoria IN('geral', 'arcos-e-personagens', 'filosofia', 'teorias', 'artes')),
    fk_usuario INT,
    CONSTRAINT fkUsuarioTopico FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);

SELECT * FROM topico JOIN usuario ON fk_usuario = idUsuario;

CREATE TABLE metricas (
	idMetricas INT,
    categoriasMaisUtlizadas VARCHAR (45),
    usuariosCadastrados VARCHAR(45),
    fk_topico INT,
    CONSTRAINT fkMetricasTopico FOREIGN KEY (fk_topico) REFERENCES topico(idTopico),
    PRIMARY KEY (idMetricas, fk_topico)
);

CREATE TABLE comentario (
	idComentario INT AUTO_INCREMENT,
    comentario VARCHAR (255),
    fk_topicos INT,
    CONSTRAINT fkComentarioTopico FOREIGN KEY (fk_topicos) REFERENCES metricas(idMetricas),
    fk_paiComentario INT,
    CONSTRAINT fk_paiComentario FOREIGN KEY (fk_paiComentario) REFERENCES comentario(idComentario),
    PRIMARY KEY (idComentario, fk_topicos)
);

SELECT * FROM topico;
SELECT * FROM usuario;
SELECT * FROM topico ORDER BY idTopico DESC LIMIT 5;