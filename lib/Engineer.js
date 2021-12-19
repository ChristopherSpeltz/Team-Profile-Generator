const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(github, name, id, email) {
  
    super(email, id, name);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
