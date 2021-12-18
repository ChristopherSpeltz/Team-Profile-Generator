const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");


const managerPrompt = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please provide name of team manager. (Required)', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter manager name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please provide  manager's Employee ID.(Required)",
            validate: idInput => {
                if  (idInput) {
                    return true; 
                } else {
                    console.log ("Please enter the manager's Employee ID!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email address.(Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ('Please enter an email address!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number(Required)",
            validate: officeInput => {
                if  (officeInput) {
                    return true; 
                } else {
                    console.log ('Please enter office number of manager!')
                    return false;
                }
            }
        }
    ]);
};

const engineerPrompt = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please provide name of engineer. (Required)', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter engineer name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please provide  engineer's employee ID.(Required)",
            validate: idInput => {
                if  (idInput) {
                    return true; 
                } else {
                    console.log ("Please enter the engineer's Employee ID!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email address.(Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ("Please enter the engineer's email address!")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's github username(Required)",
            validate: githubInput => {
                if  (githubInput) {
                    return true; 
                } else {
                    console.log ('Please enter github username!')
                    return false;
                }
            }
        }
    ]);
};

const internPrompt = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please provide name of intern. (Required)', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter intern name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please provide  intern employee ID.(Required)",
            validate: idInput => {
                if  (idInput) {
                    return true; 
                } else {
                    console.log ("Please enter the intern Employee ID!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email address.(Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ("Please enter the email address of intern!")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school(Required)",
            validate: schoolInput => {
                if  (schoolInput) {
                    return true; 
                } else {
                    console.log ('Please enter school!')
                    return false;
                }
            }
        }
    ]);
};








const appMenu = () => {
    console.log(`
    =====================================
    Welcome to the TEAM generator
    =====================================
    `);
}

const init = function () {
    appMenu();
    managerPrompt;
}

init ();