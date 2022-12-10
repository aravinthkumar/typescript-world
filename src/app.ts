/* 

Class -> Done
Inheritance -> Done
Abstract Class -> Not Done
Static methods,properties -> Not Done
Singleton -> Not Done

*/


class Department
{
    private id: string;
    private name: string;
    protected admins: string[];
    protected degree: string;
    
    constructor(id:string,name:string){
        this.id = id;
        this.name = name;
        this.admins = [];
        this.degree = "";
    }

    addAdmin(admin:string,degree: string){
        this.admins.push(admin)
    }

    printAddedAdmin(){
        console.log(this.admins);
    }

    printDepartment(){
        console.log(`ID is ${this.id}, Name is ${this.name}, and Admins are ${this.admins}`);
    }

}

const department = new Department("1","Admin");
department.addAdmin("Bhakthavatsala","BA");
department.printAddedAdmin();
department.printDepartment();

const department2 = new Department("2","Mechanical");
department2.addAdmin("Darshini","BA");
department2.printAddedAdmin();
department2.printDepartment();



class ITDepartment extends Department{
private computers: string[]
    constructor(id: string,name: string,degree: string,computers: string[]){
        super(id,name);
        this.computers = [];
        this.degree = degree;
    }

    addAdmin(admin: string): void {
        if (this.degree === "IT"){
            this.admins.push(admin);
        }
    }

    addComputers(computer: string){
        this.computers.push(computer);
    }

    getComputers(){
        console.log(this.computers);
    }

}

const itdepart = new ITDepartment("3","IT Department","IT",[]);
itdepart.addAdmin("Aravinth");
itdepart.printAddedAdmin();
itdepart.printDepartment();
itdepart.addComputers("Mac");
itdepart.getComputers();