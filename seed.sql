DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(60) NOT NULL,
    salary DECIMAL(8,2),
    department_id VARCHAR(60) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    role_id VARCHAR(60) NOT NULL,
    manager_id VARCHAR(60) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Sales"), ("Finance"), ("Legal"), ("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, "Sales"), ("Salesperson", 80000, "Sales"),
("Lead Engineer", 150000, "Engineering"), ("Software Engineer", 120000, "Engineering"), 
("Accountant", 125000, "Finance"), ("Legal Team Lead", 250000, "Legal"), 
("Lawyer", 190000, "Legal");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Joe", "Jackson", "Sales Lead", "Mike Smith"), ("James", "Johnson", "Salesperson", "Mike Smith"), 
("Alexis", "Hunter", "Lead Engineer", "Sarah Betts"), ("Manny", "Shaw", "Software Engineer", "Sarah Betts"), 
("Isabella", "Watson", "Accountant", "Hanna Kelly"), ("Fernando", "Gonzalez", "Legal Team Lead", "Cody Bell"), 
("Walker", "Mutz", "Lawyer", "Cody Bell");
