// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(github) {
        this.github = github;
    };
    getGithub() {
        return this.name;
    };
    getRole() {
        return "Engineer";
    };
    
};

module.exports = Engineer;
