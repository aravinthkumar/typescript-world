enum Role {
    ADMIN=1,DEVELOPER=2,TESTER=3
}

const person: {
    name: string,
    age: number,
    healthMeasurement: {
        bloodPressure: string,
        temperature: number,
        temperatureDate: number}
    hobbies: string[],
    sizes: [string,number],
    role: Role
}
 = {
    name: "Aravinth", //string
    age: 30, // number
    healthMeasurement : { //nested object
        bloodPressure: "129/80",
        temperature: 98,
        temperatureDate: 12122022
    }     ,
    hobbies: ['Basketball','Football'], //array "string"
    sizes: ["Hello",2.5], // tuple
    role: Role.ADMIN //enum
}

console.log(person);

console.log(person.role);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase()); //method of string
}

let favoriteHobby: any[];//any type
favoriteHobby = ["Basketball","Football",121,true,];