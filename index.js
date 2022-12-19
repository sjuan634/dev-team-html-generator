const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Array to store employee objects
const employees = [];

// Function to prompt the user for information about a new employee
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the employee\'s name:'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the employee\'s ID:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the employee\'s email:'
    },
    {
      type: 'list',
      name: 'role',
      message: 'Select the employee\'s role:',
      choices: ['Manager', 'Engineer', 'Intern']
    }
  ]).then(answers => {
    // Based on the selected role, prompt the user for additional information
    switch (answers.role) {
      case 'Manager':
        return inquirer.prompt([
          {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the manager\'s office number:'
          }
        ]).then(managerAnswers => {
          // Create a new Manager object and add it to the employees array
          const manager = new Manager(answers.name, answers.id, answers.email, managerAnswers.officeNumber);
          employees.push(manager);

          // Ask the user if they want to add another employee
          return promptAddAnother();
        });
      case 'Engineer':
        return inquirer.prompt([
          {
            type: 'input',
            name: 'github',
            message: 'Enter the engineer\'s GitHub username:'
          }
        ]).then(engineerAnswers => {
          // Create a new Engineer object and add it to the employees array
          const engineer = new Engineer(answers.name, answers.id, answers.email, engineerAnswers.github);
          employees.push(engineer);

          // Ask the user if they want to add another employee
          return promptAddAnother();
        });
      case 'Intern':
        return inquirer.prompt([
          {
            type: 'input',
            name: 'school',
            message: 'Enter the intern\'s school:'
          }
        ]).then(internAnswers => {
          // Create a new Intern object and add it to the employees array
          const intern = new Intern(answers.name, answers.id, answers.email, internAnswers.school);
          employees.push(intern);

          // Ask the user if they want to add another employee
          return promptAddAnother();
        });
    }
  });
};

const promptAddAnother = () => {
  return inquirer.prompt([
    {
      type: 'confirm',
      name: 'addAnother',
      message: 'Would you like to add another employee?'
    }
  ]).then(answers => {
    if (answers.addAnother) {
      // If the user wants to add another employee, prompt them for information again
      return promptUser();
    } else {
      // If the user is finished adding employees, generate the HTML output
      return generateHTML();
    }
  });
};

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
  fs.writeFile('./dist/team.html', html);
};

// Start the application by prompting the user for information about the manager
promptUser().then(() => {
  console.log('HTML file generated successfully!');
});