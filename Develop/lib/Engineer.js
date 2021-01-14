const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(school) {
        this.school = school;
    };
    getSchool() {
        return this.School;
    };
    getRole() {
        return "Intern";
    };
    
};

module.exports = Intern;
