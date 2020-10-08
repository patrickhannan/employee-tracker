const inquirer = require("inquirer")
const mysql = require("mysql");
const { allowedNodeEnvironmentFlags } = require("process");
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

function start() {
    inquirer
    .prompt(firstPrompt)
    .then((data) => {
        if (data.commandChoice === "Add Department") {
            addDepartment();
        } else if (data.commandChoice === "Add Role") {
            addRole();
        } else if (data.commandChoice === "Add Employee") {
            addEmployee();
        } else if (data.commandChoice === "View Departments") {
            viewDepartments();
        } else if (data.commandChoice === "View Roles") {
            viewRoles();
        } else if (data.commandChoice === "View Employees") {
            viewEmployees();
        } else if (data.commandChoice === "Update Employee Roles") {
            updateRoles();
        } else if (data.commandChoice === "Exit") {
            connection.end;
        }
    })
};