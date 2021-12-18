const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager(2, 'chris', 'test@test.com', 6);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role', () => {
    const manager = new Manager(2, 'chris', 'test@test.com', 6);

    expect(manager.getRole()).toEqual('Manager');
}); 