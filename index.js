const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Employee = require('./lib/employee');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter the employee\'s name:',
  },
  {
    type: 'input',
    name: 'id',
    message: 'Enter the employee\'s ID:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter the employee\'s email:',
  },
]
// Array to store employee objects
const employees = [];

function getManager() {
  return inquirer.prompt([
    ...questions,
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter the manager\'s office number:',
    },
  ])
  .then((answers) => {
  const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
  employees.push(manager);
  console.log(employees)
  return getTeam()
})
}

function getTeam() {
  return inquirer.prompt([
    {
      type: 'confirm',
      name: 'addAnother',
      message: 'Would you like to add another employee?',
    },
  ])
  .then((answer) => {
    if (answer.addAnother) {
      return inquirer.prompt([
        {
          type: 'list',
          name: 'role',
          message: 'Select the employee\'s role:',
          choices: ['Engineer', 'Intern'],
        },
        ...questions,
        {
          type: 'input',
          name: 'github',
          message: 'Enter the engineer\'s GitHub username:',
          when: (answers) => answers.role === 'Engineer',
        },
        {
          type: 'input',
          name: 'school',
          message: 'Enter the intern\'s school:',
          when: (answers) => answers.role === 'Intern',
        }
      ])
      .then((answers) => {
        switch (answers.role){
          case 'Engineer':
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employees.push(engineer);
          break;
          case 'Intern':
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employees.push(intern);
          break;
        }
        return getTeam();
      })
    } else {
      return generateHTML();
    }
  })
}

// Function to generate the HTML output
const generateHTML = () => {
  // Create the HTML template
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Team Roster</title>
    </head>
    <body>
      <h1>Team Roster</h1>
      <ul>
        ${employees.map(employee => {
          return `
            <li>
              <h2>${employee.getName()}</h2>
              <p>Role: ${employee.getRole()}</p>
              <p>ID: ${employee.getId()}</p>
              <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
              ${employee.getRole() === 'Manager' ? `<p>Office Number: ${employee.officeNumber}</p>` : ''}
              ${employee.getRole() === 'Engineer' ? `<p>GitHub: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></p>` : ''}
              ${employee.getRole() === 'Intern' ? `<p>School: ${employee.getSchool()}</p>` : ''}
            </li>
          `;
        }).join('')}
      </ul>
    </body>
    </html>
  `;

  // Write the HTML to a file
  fs.writeFile('./dist/team.html', html, function (err) {
    err ? console.error(err) : console.log('Saved!');
});
};

getManager();