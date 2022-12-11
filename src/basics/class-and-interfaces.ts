/* 

Class -> Done
Inheritance -> Done
Abstract Class -> Done
Static methods,properties -> Done
Singleton -> Done
Interface -> Done
    Multiple Inheritance using Interface -> Done
   optional Can be used for function -> 
    Can use optional parameters. -> Done

*/


abstract class Department
{
    private id: string;
    private name: string;
    protected admins: string[];
    protected degree: string;
  
    
   protected constructor(id:string,name:string){
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

   static getDegree(): string{
       return "IT";
    }

}


//Static method
console.log(Department.getDegree());



class ITDepartment extends Department{
private computers: string[]
private static instance: ITDepartment;
   private constructor(id: string,name: string,degree: string,computers: string[]){
        super(id,name);
        this.computers = [];
        this.degree = degree;
    }


     static getInstance(){
        if (this.instance){
         return this.instance;
        }
         this.instance = new ITDepartment("d2","name","degree",[]);
         return this.instance;
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

const department2 = ITDepartment.getInstance();
console.log(department2);

const department3 = ITDepartment.getInstance();
console.log(department3);


interface Service{
    id: string,
    name?: string

    getInstance():string
}

interface ServiceCredentials{
    getCredential(serviceId:string):string
}

class CFService implements Service,ServiceCredentials {
 id: string
 name?: string

constructor(id:string,name?:string){
    this.id = id;
    this.name = name;

}

getInstance(): string {
    return this.id
}

getCredential(serviceId: string): string {
    return serviceId
}

}

const cfService = new CFService("service-1","audit-log");
console.log(cfService.getInstance());
console.log(cfService.getCredential("service-1"));

const cfService2 = new CFService("service-2");
console.log(cfService2.getInstance());
console.log(cfService2.getCredential("service-2"));