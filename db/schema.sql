DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burgers(
id INTEGER(11) AUTO_INCREMENT,
burger_name TEXT,
devoured BOOLEAN default FALSE,
`date` TIMESTAMP not null,
PRIMARY KEY (id)
);
