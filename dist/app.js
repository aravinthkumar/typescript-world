"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.admins = [];
        this.degree = "";
    }
    addAdmin(admin, degree) {
        this.admins.push(admin);
    }
    printAddedAdmin() {
        console.log(this.admins);
    }
    printDepartment() {
        console.log(`ID is ${this.id}, Name is ${this.name}, and Admins are ${this.admins}`);
    }
}
const department = new Department("1", "Admin");
department.addAdmin("Bhakthavatsala", "BA");
department.printAddedAdmin();
department.printDepartment();
const department2 = new Department("2", "Mechanical");
department2.addAdmin("Darshini", "BA");
department2.printAddedAdmin();
department2.printDepartment();
class ITDepartment extends Department {
    constructor(id, name, degree, computers) {
        super(id, name);
        this.computers = [];
        this.degree = degree;
    }
    addAdmin(admin) {
        if (this.degree === "IT") {
            this.admins.push(admin);
        }
    }
    addComputers(computer) {
        this.computers.push(computer);
    }
    getComputers() {
        console.log(this.computers);
    }
}
const itdepart = new ITDepartment("3", "IT Department", "IT", []);
itdepart.addAdmin("Aravinth");
itdepart.printAddedAdmin();
itdepart.printDepartment();
itdepart.addComputers("Mac");
itdepart.getComputers();
//# sourceMappingURL=app.js.map