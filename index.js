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
            { name: response.newDepartment },
            (err, results) => {
                if (err) throw err;
                viewDepartments();
            }
        )
    })
};

function addRole() {
    connection.query("SELECT * FROM department", function (err, results) {
        if (err) throw err;
        const arrayofDepartments = results.map(department => department.name)
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
        ]).then((response) => {
            connection.query(
                "INSERT INTO role SET ?", 
                {
                    title: response.jobTitle,
                    salary: response.salary,
                    department_id: response.departmentTitle,
                },
                (err, results) => {
                    if (err) throw err;
                    viewRoles();
                }
            )
        })
    })
};

function addEmployee() {
    connection.query("SELECT * FROM role", function (err, results) {
        if(err) throw err;
        const arrayofRoles = results.map(role => role.title)
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
                name: "managerName",
                message: "Who is the employee's manager?",
            },
        ]).then((response) => {
            connection.query(
                "INSERT INTO employee SET ?", 
                {
                    first_name: response.employeeFirstName,
                    last_name: response.employeeLastName,
                    role_id: response.employeeRole,
                    manager_id: response.managerName,
                },
                (err, results) => {
                    if (err) throw err;
                    viewEmployees();
                }
            )
        })
    })
}

function viewDepartments() {
    connection.query("SELECT * FROM department", (err, results) => {
      if (err) throw err;
      console.table(results);
      startMenu();
    });
}

function viewRoles() {
    connection.query("SELECT * FROM role", (err, results) => {
      if (err) throw err;
      console.table(results);
      startMenu();
    });
}

function viewEmployees() {
    connection.query(
      "SELECT * FROM employee", 
      (err, results) => {
        if (err) throw err;
        console.table(results);
        startMenu();
      }
    );
}

function updateRoles() {
    connection.query("SELECT * FROM role;", function (err, data) {
        if (err) throw err;
        const arrayofRoles = data.map(role => role.title)
    
        connection.query("SELECT * FROM employee;", function (err,results) {
            if (err) throw err;
            inquirer
            .prompt([
                {
                    name: "roleUpdateName",
                    type: "list",
                    message: "Which employee would you like to update?",
                    choices: function () {
                        var nameArray = [];
                        for (let i = 0; i < results.length; i++) {
                            nameArray.push(`${results[i].first_name} ${results[i].last_name}`
                            );
                        }
                        return nameArray;
                    },
                },
                {
                    name: "roleUpdateRole",
                    type: "list",
                    message: "Which role would you like to give this employee?",
                    choices: arrayofRoles,
                },
            ]).then((response) => {
                for (let i = 0; i < data.length; i++) {
                    if (response.roleUpdateRole === data[i].title) {
                    }
                }
                connection.query(
                    `UPDATE employee SET role_id = "${response.roleUpdateRole}" WHERE first_name = "${
                      response.roleUpdateName.split(" ")[0]
                    }"`,
                    (err, response) => {
                    if (err) throw err;
                    viewEmployees();
                    }
                );
            })  
        })
    }) 
}
