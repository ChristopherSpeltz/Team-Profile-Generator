const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('christopherspeltz', 'Chris', 1, 'test@test.com');
    
    expect(engineer.name).toBe;('Chris');
    expect(engineer.github).toBe('christopherspeltz');
    expect(engineer.email).toBe('test@test.com');
    expect(engineer.id).toEqual(expect.any(Number));
    
    
});

test('gets engineer github value', () => {
    const engineer = new Engineer('christopherspeltz', 'Chris', 1, 'test@test.com');

    expect(engineer.getGithub()).toEqual('christopherspeltz');
});

test('gets role of employee', () => {
    const engineer = new Engineer('christopherspeltz', 'Chris', 1, 'test@test.com');

    expect(engineer.getRole()).toEqual("Engineer");

});