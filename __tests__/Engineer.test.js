const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Chris');
    
    expect(employee.name).toBe;('Chris');
    expect(engineer.github).toBe(christopherspeltz);
    expect(employee.email).toBe('test@email.com');
    expect(employee.id).toEqual(expect.any(Number));
    
    
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Chris');

    expect(engineer.getGithub()).toHaveProperty('github');
});

test('gets role of employee', () => {
    const engineer = new Engineer('Chris');

    expect(engineer.getRole()).toEqual("Engineer");

});