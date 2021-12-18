const Employee = require('../lib/Employee');


test('test for employee object', () => {
    const employee = new Employee("test@test.com", 1, 'Chris');

    expect(employee.name).toEqual('Chris');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual('test@test.com');
});

test('test for employee name', () => {
    const employee = new Employee("test@test.com", 1, 'Chris');

    expect(employee.getName()).toHaveProperty('name');
});

test('test for employee ID', () => {
    const employee = new Employee("test@test.com", 1, 'Chris');

    expect(employee.getId()).toHaveProperty('id');
});

test('test for employee email', () => {
    const employee = new Employee("test@test.com", 1, 'Chris');

    expect(employee.getEmail()).toHaveProperty('email');
});

test('test for role of employee', () => {
    const employee = new Employee("test@test.com", 1, 'Chris');

    expect(employee.getRole()).toEqual("Employee");
}); 