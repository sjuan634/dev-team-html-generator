const {Employee, Manager, Engineer, Intern} = require('../lib/classes.js')
// const Employee = require('./Employee');
// const Manager = require('./Manager');
// const Engineer = require('./Engineer');
// const Intern = require('./Intern');

// Test the Employee class
describe('Employee', () => {
  test('Can instantiate Employee instance', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
  });

  test('Can set name via constructor arguments', () => {
    const name = 'Alice';
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

  test('Can set id via constructor argument', () => {
    const testValue = 100;
    const e = new Employee('Foo', testValue);
    expect(e.id).toBe(testValue);
  });

  test('Can set email via constructor argument', () => {
    const testValue = 'test@test.com';
    const e = new Employee('Foo', 1, testValue);
    expect(e.email).toBe(testValue);
  });

  test('Can get name via getName()', () => {
    const testValue = 'Alice';
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });

  test('Can get id via getId()', () => {
    const testValue = 100;
    const e = new Employee('Foo', testValue);
    expect(e.getId()).toBe(testValue);
  });

  test('Can get email via getEmail()', () => {
    const testValue = 'test@test.com';
    const e = new Employee('Foo', 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });

  test('getRole() should return "Employee"', () => {
    const testValue = 'Employee';
    const e = new Employee('Alice', 1, 'test@test.com');
    expect(e.getRole()).toBe(testValue);
  });
});

// Test the Manager class
describe('Manager', () => {
  test('Can set office number via constructor argument', () => {
    const testValue = 100;
    const e = new Manager('Foo', 1, 'test@test.com', testValue);
    expect(e.officeNumber).toBe(testValue);
  });

  test('getRole() should return "Manager"', () => {
    const testValue = 'Manager';
    const e = new Manager('Alice', 1, 'test@test.com', 100);
    expect(e.getRole()).toBe(testValue);
  });
});

// Test the Engineer class
describe('Engineer', () => {
  test('Can set GitHUb account via constructor argument', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer('Foo', 1, 'test@test.com', testValue);
    expect(e.github).toBe(testValue);
  });

  test('getGitHub() should return value of github', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer('Foo', 1, 'test@test.com', testValue);
    expect(e.getGithub()).toBe(testValue);
  });

  test('getRole() should return "Engineer"', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Foo', 1, 'test@test.com', 'GitHubUser');
    expect(e.getRole()).toBe(testValue);
  });
});

// Test the Intern class
describe('Intern', () => {
  test('Can set school via constructor argument', () => {
    const testValue = 'UC Berkeley';
    const e = new Intern('Foo', 1, 'test@test.com', testValue);
    expect(e.school).toBe(testValue);
  });

  test('getSchool() should return value of school', () => {
    const testValue = 'UC Berkeley';
    const e = new Intern('Foo', 1, 'test@test.com', testValue);
    expect(e.getSchool()).toBe(testValue);
  });

  test('getRole() should return "Intern"', () => {
    const testValue = 'Intern';
    const e = new Intern('Foo', 1, 'test@test.com', 'UC Berkeley');
    expect(e.getRole()).toBe(testValue);
  });
});
