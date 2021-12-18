const Intern = require('../lib/Intern');

test('get school for intern', () => {
  const intern = new Intern ('UofM');

  expect(intern.getSchool()).toHaveProperty('school');
});

test('gets role for intern', () => {
    const intern = new Intern('Chris', 'UofM');

    expect(intern.getRole()).toEqual('Intern');
});