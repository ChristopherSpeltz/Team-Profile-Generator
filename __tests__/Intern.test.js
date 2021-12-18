const Intern = require('../lib/Intern');

test('get school for intern', () => {
  const intern = new Intern ('test@test.com', 'chris', 1, 'UofM');
  console.log("This is intern", intern)
console.log("This is intern school ", intern.getSchool())
  expect(intern.getSchool()).toEqual('UofM');
});

test('gets role for intern', () => {
    const intern = new Intern('test@test.com', 'chris', 1, 'UofM');

    expect(intern.getRole()).toEqual('Intern');
});