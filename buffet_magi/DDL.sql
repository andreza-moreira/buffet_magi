-- EXEMPLO DE BANCO

-- Criar o Banco de Dados 
CREATE DATABASE IF NOT EXISTS buffet_magi;
USE buffet_magi;

-- Tabela para os tipos de evento
CREATE TABLE tipos_evento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

-- Tabela para armazenar as solicitações de orçamento
CREATE TABLE orçamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    id_tipo_evento INT,
    mensagem TEXT,
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_tipo_evento) REFERENCES tipos_evento(id)
);

-- Inserindo alguns tipos de evento para teste
INSERT INTO tipos_evento (nome) VALUES 
('Casamento'), 
('Aniversário'), 
('Evento Corporativo'), 
('Formatura');