const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber, name, email, id) {
    super(email, id, name);

    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
