const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Chris');
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role', () => {
    const manager = new Manager('Chris');

    expect(manager.getRole()).toEqual('Manager');
}); 