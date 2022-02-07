const inquirer = require("inquirer");
const fs = require("fs"); 
const path = require("path");
const utils = require("utils")
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require("./src/generateHTML.js");

const managerObjects = [];
const engineerObjects = [];
const internObjects = [];
function introprompt() {
    inquirer.prompt([
        {
            type: 'list',
            message: "Would you like to add another employee?",
            choices: ["Add new Manager", "Add new Engineer", "Add new Intern", "Generate HTML"],
            name: 'addNew',
        },
    ]).then((answer) => {
         
      if(answer.addNew === "Add new Manager"){
          managerPrompt();
      }
       else if (answer.addNew === "Add new Engineer") {
            engineerPrompts();
        } else if (answer.addNew === "Add new Intern") {
            internPrompts();
        } else if (answer.addNew === "Generate HTML") {
            
            const errorFunction = (err) => err ? console.error(err) : console.log('html generated!');
            fs.writeFile('./dist/index.html', generateHTML(managerObjects, engineerObjects, internObjects), errorFunction);
        }
      }
    )
}
function managerPrompt() {
inquirer
    .prompt([
    {
        type: 'input',
        message: "What is the manager's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "what is the  manager's ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "what is the manager's email address?",
        name: 'email',
        
    
        
        },

    {
        type: 'input',
        message: "what is the manager's office number?",
        name: 'officeNumber',
    },
     
])
  .then((answer) => {
      const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
    managerObjects.push(manager);
      introprompt();  
    }
)

};

function engineerPrompts() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "what is the engineer's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "what is the engineer's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "what is  the engineer's email address?",
            name: 'email',
        },
    
            
        
        
        {
            type: 'input',
            message: "what is the engineer's GitHub username?",
            name: 'github',
        },
        
    ])
    .then((answer) => {
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        engineerObjects.push(engineer);
        introprompt();
         
    });
}

function internPrompts() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "what is the intern's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "what is the intern's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "what is the intern's email address?",
            name: 'email',
             
        },
            
        {
            type: 'input',
            message: "what is the intern's school name?",
            name: 'school',
        },
         
    ])
    .then((answer) => {
        const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
        internObjects.push(intern);
        introprompt();
        
    });
}

introprompt();

 





 