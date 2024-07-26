-- Creación de la base de datos
CREATE DATABASE AdminClientesDB;

-- Selección de la base de datos
USE AdminClientesDB;

-- Creación de la tabla 'clientes'
CREATE TABLE cliente (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único de cliente
    nombre VARCHAR(50) NOT NULL, -- Nombre del cliente
    email VARCHAR(50) NOT NULL UNIQUE, -- Correo electrónico del cliente (debe ser único)
    telefono VARCHAR(20), -- Teléfono del cliente
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Fecha de registro del cliente
);

-- Creación del índice para la columna 'nombre'
CREATE INDEX idx_nombre ON cliente(nombre);

-- Inserción de datos en la tabla 'clientes'
INSERT INTO cliente (nombre, email, telefono) VALUES 
('Juan Perez', 'juan.perez@example.com', '123456789'),
('Maria Gomez', 'maria.gomez@example.com', '987654321');
