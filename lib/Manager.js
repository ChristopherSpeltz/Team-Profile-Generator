const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber, name, email, id) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
