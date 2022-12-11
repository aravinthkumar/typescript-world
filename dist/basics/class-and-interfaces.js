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
    static getDegree() {
        return "IT";
    }
}
console.log(Department.getDegree());
class ITDepartment extends Department {
    constructor(id, name, degree, computers) {
        super(id, name);
        this.computers = [];
        this.degree = degree;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ITDepartment("d2", "name", "degree", []);
        return this.instance;
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
const department2 = ITDepartment.getInstance();
console.log(department2);
const department3 = ITDepartment.getInstance();
console.log(department3);
class CFService {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getInstance() {
        return this.id;
    }
    getCredential(serviceId) {
        return serviceId;
    }
}
const cfService = new CFService("service-1", "audit-log");
console.log(cfService.getInstance());
console.log(cfService.getCredential("service-1"));
const cfService2 = new CFService("service-2");
console.log(cfService2.getInstance());
console.log(cfService2.getCredential("service-2"));
//# sourceMappingURL=class-and-interfaces.js.map