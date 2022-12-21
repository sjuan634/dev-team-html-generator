const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');


// Test the Employee class
describe('Employee', () => {
  test('Should instantiate Employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
  });

  test('Should set name, id, and email properties', () => {
    const name = 'Juan';
    const id = '123';
    const email = 'sjuan634@yahoo.com';
    const employee = new Employee(name, id, email);

    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
  });

  test('getName() should return name. getId() should return id. getEmail should return email. getRole should return "Emplyee"', () => {
    const name = 'Juan';
    const id = '123';
    const email = 'sjuan634@yahoo.com';
    const employee = new Employee(name, id, email);

    expect(employee.getName()).toBe(name);
    expect(employee.getId()).toBe(id);
    expect(employee.getEmail()).toBe(email);
    expect(employee.getRole()).toBe('Employee');
  });
});

// Test the Manager class
describe('Manager', () => {
  test('Should instantiate Manager object', () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe('object');
  });

  test('Should set name, id, email, and officeNumber properties', () => {
    const name = 'Juan';
    const id = '123';
    const email = 'sjuan634@yahoo.com';
    const officeNumber = '1';
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.email).toBe(email);
    expect(manager.officeNumber).toBe(officeNumber);
  });

  test('getName() should return name. getId() should return id. getEmail should return email. getRole should return "Manager"', () => {
    const name = 'Juan';
    const id = '123';
    const email = 'sjuan634@yahoo.com';
    const officeNumber = '1';
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.getName()).toBe(name);
    expect(manager.getId()).toBe(id);
    expect(manager.getEmail()).toBe(email);
    expect(manager.getRole()).toBe('Manager');
  });
});

// Test the Engineer class
describe('Engineer', () => {
  test('Should instantiate Engineer object', () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe('object');
  });

  test('Should set name, id, email, and github properties', () => {
    const name = 'Juan';
    const id = '123';
    const email = 'sjuan634@yahoo.com';
    const github = 'sjuan634';
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email);
    expect(engineer.github).toBe(github);
  });

  test('getName() should return name. getId() should return id. getEmail should return email. getGithub() should return github. getRole should return "Engineer."', () => {
    const name = 'Juan';
    const id = '123';
    const email = 'sjuan634@yahoo.com';
    const github = 'sjuan634';
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.getName()).toBe(name);
    expect(engineer.getId()).toBe(id);
    expect(engineer.getEmail()).toBe(email);
    expect(engineer.getGithub()).toBe(github);
    expect(engineer.getRole()).toBe('Engineer');
  });
});

// Test the Intern class
describe('Intern', () => {
  test('Should instantiate Intern object', () => {
    const intern = new Intern();

    expect(typeof(intern)).toBe('object');
  });

  test('Should set name, id, email, and school properties', () => {
    const name = 'Juan';
    const id = '123';
    const email = 'sjuan634@yahoo.com';
    const school = 'edX';
    const intern = new Intern(name, id, email, school);

    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id);
    expect(intern.email).toBe(email);
    expect(intern.school).toBe(school);
  });

  test('getName() should return name. getId() should return id. getEmail should return email. getSchool() should return school. getRole should return "Intern"', () => {
    const name = 'Juan';
    const id = '123';
    const email = 'sjuan634@yahoo.com';
    const school = 'edX';
    const intern = new Intern(name, id, email, school);

    expect(intern.getName()).toBe(name);
    expect(intern.getId()).toBe(id);
    expect(intern.getEmail()).toBe(email);
    expect(intern.getSchool()).toBe(school);
    expect(intern.getRole()).toBe('Intern');
  });
});