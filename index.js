const inquirer = require("inquirer")
const mysql = require("mysql");
var deptList = [];

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Patrickcode",
    database: "employee_db",
});

connection.connect(function (err) {
    if (err) throw err;
    startMenu();
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

function startMenu() {
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
            connection.end();
        }
    })
};

function addDepartment() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "newDepartment",
            message: "What is the name of the department you would like to add?",
        }
    ]).then((response) => {
        connection.query(
            "INSERT INTO department SET ?", 
            { division: response.newDepartment },
            (err, data) => {
                if (err) throw err;
                console.log(data)
                startMenu();
            }
        )
    })
};

function addRole() {
    connection.query("SELECT * FROM department", function (err, results) {
        if (err) throw err;
        const arrayofDepartments = results.map(department => department.division)
        inquirer
        .prompt([
            {
                type: "input",
                name: "jobTitle",
                message: "What is the name of the employee role you would like to add?",
            },
            {
                type: "input",
                name: "salary",
                message: "What is the salary for this role?",
            },
            {
                type: "list",
                name: "departmentTitle",
                message: "What department does this role associate with?",
                choices: arrayofDepartments
            },
        ]).then((jobTitle, salary, departmentTitle) => {
            connection.query(
                "INSERT INTO roles SET ?", 
                {
                    title: jobTitle,
                    salary: salary,
                    department_title: departmentTitle,
                },
                (err, results) => {
                    if (err) throw err;
                    console.table(results)
                    startMenu();
                }
            )
        })
    })
};

function addEmployee() {
    connection.query("SELECT * FROM roles", function (err, results) {
        if(err) throw err;
        const arrayofRoles = results.map(roles => roles.title)
        inquirer
        .prompt([
            {
                type: "input",
                name: "employeeFirstName",
                message: "What is the employee's first name?",
            },
            {
                type: "input",
                name: "employeeLastName",
                message: "What is the employee's last name?",
            },
            {
                type: "list",
                name: "employeeRole",
                message: "What is the employee's role?",
                choices: arrayofRoles
            },
            {
                type: "input",
                name: "manager",
                message: "What is the employee's manager?",
            },
        ])
    })

}