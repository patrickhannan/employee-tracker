const inquirer = require("inquirer")
const mysql = require("mysql");
const { start } = require("repl");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employee_db",
});

connection.connect(function (err) {
    if (err) throw err;
    start();
  });

var firstPrompt = {
    type: "list",
    name: "commandChoice",
    message: "What would you like to do?",
    choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View Departments",
        "View Roles",
        "View Employees",
        "Update Employee Roles",
        "Exit",
    ],
};