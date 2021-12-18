const Employee = require('../lib/Employee');


test('test for employee object', () => {
    const employee = new Employee('Chris');

    expect(employee.name).toBe;('Chris');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('test@email.com');
});

test('test for employee name', () => {
    const employee = new Employee('Chris');

    expect(employee.getName()).toHaveProperty('name');
});

test('test for employee ID', () => {
    const employee = new Employee('Chris');

    expect(employee.getId()).toHaveProperty('id');
});

test('test for employee email', () => {
    const employee = new Employee('Chris');

    expect(employee.getEmail()).toHaveProperty('email');
});

test('test for role of employee', () => {
    const employee = new Employee('Chris');

    expect(employee.getRole()).toEqual("Employee");
}); 