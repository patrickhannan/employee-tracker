DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(60) NOT NULL,
    salary DECIMAL,
    department_title VARCHAR(60),
    PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Sales"), ("Finance"), ("Legal"), ("Engineering");

INSERT INTO roles (title, salary, department_title)
VALUES ("Sales Lead", 100000, "Sales"), ("Salesperson", 80000, "Sales"),
("Lead Engineer", 150000, "Engineering"), ("Software Engineer", 120000, "Engineering"), 
("Accountant", 125000, "Finance"), ("Legal Team Lead", 250000, "Legal"), 
("Lawyer", 190000, "Legal");